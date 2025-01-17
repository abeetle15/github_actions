import request from "supertest";
import server from "../server.js";

test("GET / should respond with 'Hello, World!'", async () => {
  const response = await request(server).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello, World!");
  expect(response.text).toBe("failed test");
});
