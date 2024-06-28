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
