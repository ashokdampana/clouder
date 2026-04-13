const request = require("supertest");
const app = require("../app");

describe("Home API", () => {
  it("GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Welcome to my app");
  });

  it("POST /", async () => {
    const res = await request(app)
      .post("/")
      .send({ name: "Ashok" });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello Ashok");
  });
});