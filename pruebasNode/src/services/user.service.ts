import { UserModel } from "../interfaces/interfaces";
import { users } from "../data/data";

interface getUserByIdProps {
  id: UserModel["id"];
  callback: (err?: string, user?: UserModel) => void;
}
export const getUserById = async ({ id, callback }: getUserByIdProps) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    return callback(`User not found with id: ${id}`);
  }
  return callback(undefined, user);
};
