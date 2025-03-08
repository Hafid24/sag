const { PORT } = require("../config/env");

const app = require("../server");

let server;

beforeAll((done) => {
  server = app.listen(4000, () => done());
});

afterAll(() => {
  server.close();
});

test("GET /api/hello should return Hello, World!", async () => {
  const response = await fetch(`http://localhost:${PORT}/search/?q=Locas`);
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toHaveProperty("docs");
});
