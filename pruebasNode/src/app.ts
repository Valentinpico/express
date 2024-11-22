import { UserModel } from "./interfaces/interfaces";
import { getUserById } from "./services/user.service";

const newUser: UserModel = {
  id: 1,
  name: "John Doe",
  email: "@john.doe",
};

getUserById({
  id: 2,
  callback: (err, user) => console.log(err, user),
});
