import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { UserResponse } from "../types/user.response";

export class UserService {

  async getAllUsers(): Promise<UserResponse[]> {
    const userRepository = new UserRepository();
    let users = await userRepository.getAllUsers();
    return users.map((user) => {
      const userResponse: UserResponse = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        privilege: user.privilege,
        email: user.email,
      };

      return userResponse;
    });
  }
  //
  // async getUserById(id: number): Promise<User> {
  //   const userRepository = new UserRepository();
  //   return userRepository.findOne(id);
  // }
  //
  // async createUser(user: User): Promise<User> {
  //   const userRepository = new UserRepository();
  //   return userRepository.save(user);
  // }
  //
  // async updateUser(id: number, user: User): Promise<User> {
  //   const userRepository = new UserRepository();
  //
  //   await userRepository.update(id, user);
  //   return userRepository.findOne(id);
  // }
  //
  // async deleteUser(id: number): Promise<void> {
  //   const userRepository = new UserRepository();
  //
  //   await userRepository.delete(id);
  // }
}
