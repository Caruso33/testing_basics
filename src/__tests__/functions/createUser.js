import createUser, { runServer } from "../../functions/createUser";
import faker from "faker";

let server;

beforeAll(async () => {
  server = await runServer();
});

afterAll(done => {
  server.close(done); // manually setting cb
});

describe("creating user function", () => {
  test("should create a user", async () => {
    let testUser = {
      name: faker.name.firstName() + " " + faker.name.lastName(),
      age: faker.random.number(),
      email: faker.internet.email()
    };

    const user = await createUser(testUser);
    expect(user).toMatchObject({
      name: expect.any(String),
      age: expect.any(Number)
    });
  });

  test("it should fail if no email provided", async () => {
    let testUser = {
      name: faker.name.firstName() + " " + faker.name.lastName(),
      age: faker.random.number()
    };

    const user = await createUser(testUser).catch(e => e);
    expect(user).toBe("no email provided");
  });
});
