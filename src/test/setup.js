import "@testing-library/jest-dom";
import {server} from "./mock/server";
import {beforeAll} from "vitest";
import {afterAll} from "vitest";
import {afterEach} from "vitest";
beforeAll(() => server.listen({onUnhandledRequest: "error"}));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
