import request from "supertest";

import app from "../app";

describe("Test app.ts", () => {
  test("Check the test endpoint", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.body).toEqual({ message: "pong" });
  });
});
