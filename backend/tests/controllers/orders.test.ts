import request from "supertest";

import app from "../../app";
import { FormattedOrders, OrderWithProductsAsList } from "../../types";

describe("Orders route", () => {
  test("all orders can be fetched", async () => {
    const orders = await request(app).get(
      "/api/orders?productName&shipped=false"
    );
    expect(Object.values(orders.body).length).toBeGreaterThan(0);
  });
  test("all orders amount is greater than only shipped orders", async () => {
    const allOrders = await request(app).get(
      "/api/orders?productName&shipped=false"
    );
    const onlyShippedOrders = await request(app).get(
      "/api/orders?productName&shipped=true"
    );
    expect(Object.values(allOrders.body).length).toBeGreaterThan(
      Object.values(onlyShippedOrders.body).length
    );
  });
  test("all order product names contain searched keywords", async () => {
    const res = await request(app).get(
      "/api/orders?productName=avl&shipped=false"
    );
    const allOrders: FormattedOrders = res.body;
    const productNames = new Set(
      Object.values(allOrders)
        .map((order: OrderWithProductsAsList) => order.Products)
        .map((arr) => arr[0])
    );
    expect(productNames.size).toEqual(1);
    expect([...productNames]).toContain("Pavlova");
  });
  test("shipped and productName search categories work along with each other well", async () => {
    const ordersSearchedByAvl = await request(app).get(
      "/api/orders?productName=avl&shipped=false"
    );
    const ordersSearchedByAvlShipped = await request(app).get(
      "/api/orders?productName=avl&shipped=true"
    );
    expect(Object.values(ordersSearchedByAvl.body).length).toBeGreaterThan(
      Object.values(ordersSearchedByAvlShipped.body).length
    );
  });
  test("individual order retrieval", async () => {
    const ordersSearchedByAvl = await request(app).get("/api/orders/10248");
    expect(Object.values(ordersSearchedByAvl.body).length).toBeGreaterThan(1);
  });
});
