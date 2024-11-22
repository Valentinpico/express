import { getUserById } from "../src/services/user.service";

describe("App", () => {
  test("user not found", (done) => {
    const id = 21;
    getUserById({
      id,
      callback: (err, user) => {
        expect(err).toBe(`User not found with id: ${id}`);

        done();
      },
    });
  });
  test("user found", (done) => {
    const id = 1;
    getUserById({
      id,
      callback: (err, user) => {
        expect(err).toBeUndefined();
        expect(user).toEqual({
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
        });

        done();
      },
    });
  });
});
