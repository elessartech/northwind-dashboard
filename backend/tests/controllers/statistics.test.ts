import request from "supertest";

import app from "../../app";

describe("Statistics route", () => {
  test("number of orders throughout timeline can be fetched", async () => {
    const statisticsData = await request(app).get(
      "/api/statistics/number-of-orders-throughout-timeline"
    );
    expect(Object.values(statisticsData.body).length).toBeGreaterThan(0);
  });
  test("number of orders by country can be fetched", async () => {
    const statisticsData = await request(app).get(
      "/api/statistics/number-of-orders-by-country"
    );
    expect(Object.values(statisticsData.body).length).toBeGreaterThan(0);
  });
  test("most saled product can be fetched", async () => {
    const statisticsData = await request(app).get(
      "/api/statistics/most-saled-product"
    );
    expect(Object.values(statisticsData.body).length).toBeGreaterThan(0);
  });
  test("most saled product per item can be fetched", async () => {
    const statisticsData = await request(app).get(
      "/api/statistics/most-saled-product-per-item"
    );
    expect(Object.values(statisticsData.body).length).toBeGreaterThan(0);
  });
  test("most saled category can be fetched", async () => {
    const statisticsData = await request(app).get(
      "/api/statistics/most-saled-category"
    );
    expect(Object.values(statisticsData.body).length).toBeGreaterThan(0);
  });
});
