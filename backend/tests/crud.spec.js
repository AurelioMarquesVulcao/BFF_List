const request = require("supertest");
const app = require("../serverTest");
const mongoose = require("mongoose");

describe("crud-01", () => {
  it("get base route", async () => {
    const res = await await request(app).get("/base").send({ productName: "teste" });
    expect(res.body[0]).toHaveProperty("productName");
    // .post("/").send({ name: "aurelio", senha: "senha" });
  });

  it("post base route", async () => {
    const res = await await request(app).post("/base").send({
      userId: "1",
      productName: "teste",
      sellPrice: "2",
      image: "String",
    });
    expect(res.body).toHaveProperty("productName");
    // .post("/").send({ name: "aurelio", senha: "senha" });
  });

  it("put base route", async () => {
    const res = await await request(app).put("/base").send({
      "_id": "609ee504bbebc157cf7ea253"
    });
    expect(res.body).toHaveProperty("productName");
    // .post("/").send({ name: "aurelio", senha: "senha" });
  });

  it("post main route", async () => {
    const res = await request(app).post("/");
    // console.log(res);
    // console.log(res.body);
    expect(res.body).toHaveProperty("message");
    // .post("/").send({ name: "aurelio", senha: "senha" });
  });

  it("get main route", async () => {
    const res = await request(app).get("/");
    await mongoose.connection.close();
    expect(res.body).toHaveProperty("message");
    // .post("/").send({ name: "aurelio", senha: "senha" });
  });
});
// describe("crud-02", () => {
//   it("get main route", async () => {
//     const res = await request(app).get("/");
//     // console.log(res.body);
//     expect(res.body).toHaveProperty("message");
//     // .post("/").send({ name: "aurelio", senha: "senha" });
//   });
// });
