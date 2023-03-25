import request from "supertest";

import app from "../../app";

describe("User routes", () => {
  test("Get all users", async () => {
    const res = await request(app).get("/api/orders?productName&shipped=false");
    expect(Object.values(res.body).length).toBeGreaterThan(0);
  });
});
