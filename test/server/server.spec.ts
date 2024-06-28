import request from "supertest";
import { expect } from "chai";
import app from "app";

describe("Testing Server and Routes", () => {
  it("checking if server is running", async () => {
    const res = await request(app).get("/healthcheck");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Server is running");
  });
});


describe("GET /calc/add", () => {
  it("should return 0 for an empty string", async () => {
    const res = await request(app).get("/calc/add").query({ numbers: "" });
    expect(res.status).to.equal(200);
    expect(res.body.result).to.equal(0);
  });

  it("should return the number itself for a single number", async () => {
    const res = await request(app).get("/calc/add").query({ numbers: "1" });
    expect(res.status).to.equal(200);
    expect(res.body.result).to.equal(1);
  });

  it("should return the sum of two numbers", async () => {
    const res = await request(app).get("/calc/add").query({ numbers: "1,2" });
    expect(res.status).to.equal(200);
    expect(res.body.result).to.equal(3);
  });
});