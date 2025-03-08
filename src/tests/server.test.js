const app = require("../server");

let server;

beforeAll((done) => {
  server = app.listen(4000, () => done());
});

afterAll(() => {
  server.close();
});

test("GET /api/hello should return Hello, World!", async () => {
  const response = await fetch("http://localhost:4000/api/?q=Locas");
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toHaveProperty("message", "Hello, World!");
});
