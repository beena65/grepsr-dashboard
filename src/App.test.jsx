import {describe, it, expect, beforeAll, afterAll, afterEach} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import {server} from "./test/mock/server";
import {HttpResponse, http} from "msw";

import CustomizedTables from "./components/Content/Table";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
    server.resetHandlers();
});
describe("CustomizedTables Component", () => {
    it("testing vitest", () => {
        expect(true).toBeTruthy();
    });

    it("Api success scenario onload ", async () => {
        render(<CustomizedTables />);

        await waitFor(() => {
            expect(screen.getByText("product_name 1")).toBeInTheDocument();
        });
    });

    it("Api error scenario onload ", async () => {
        server.use(
            http.get("https://63883c2bd94a7e504095e98b.mockapi.io/fakeApiqqqqqqq", () => {
                return new HttpResponse(null, {status: 401});
            })
        );
        render(<CustomizedTables />);

        await waitFor(() => {
            expect(screen.getByText("Error: failed to fetch data")).toBeInTheDocument();
        });
    });

    it("renders loading state correctly", async () => {
        render(<CustomizedTables />);

        expect(screen.getByText("Loading data....")).toBeInTheDocument();

        await waitFor(
            () => {
                expect(screen.queryByText("Loading data....")).toBeNull();
            },
            {timeout: 5000}
        );
    });

    it("renders table rows correctly on successful API fetch", async () => {
        render(<CustomizedTables />);

        await waitFor(() => {
            expect(screen.getByText("product_name 1")).toBeInTheDocument();
            expect(screen.getByText("Brand 1")).toBeInTheDocument();
            expect(screen.getByText("Availability 1")).toBeInTheDocument();
        });
    });
});
