import {http, HttpResponse} from "msw";

export const handlers = [
    http.get("https://63883c2bd94a7e504095e98b.com/todos", () => {
        return HttpResponse.json(
            [
                {
                    product_name: "product_name 1",
                    Price: 41,
                    Rating: 96,
                    Brand: "Brand 1",
                    Availability: "Availability 1",
                    Productname: "1",
                },
            ],

            {status: 200}
        );
    }),
];
