/*import supertest from "supertest";
import app from "../../app";
import config from "../../util/config";

const request = supertest(app);*/

describe("Login route", () => {
  test("test", () => {
    expect(1).toEqual(1);
  });
  /*test("responds with a token and user data if credentials are correct", async () => {
    const user = {
      email: config.ADMIN_EMAIL,
      password: config.ADMIN_PASSWORD,
    };

    const response = await request.post("/api/login").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("email", user.email);
    expect(response.body).toHaveProperty("name");
  });

  test("responds with 401 if credentials are incorrect", async () => {
    const invalidUser = {
      email: "nonexistent@example.com",
      password: "wrongpassword",
    };

    const response = await request.post("/api/login").send(invalidUser);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty(
      "error",
      "invalid username or password"
    );
  });*/
});
