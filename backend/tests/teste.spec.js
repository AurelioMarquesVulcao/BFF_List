const request = require("supertest");
const app = require("../index");

describe("test-01", () => {
  it("get main route", async () => {
    const res = await request(app)
    .get("/")

    expect(res.body).toHaveProperty("message")
    // .post("/").send({ name: "aurelio", senha: "senha" });
  });
});
