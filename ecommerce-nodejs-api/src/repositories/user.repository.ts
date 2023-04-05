import { getConnection } from "typeorm";
import {User} from "../entities/user.entity";

export class UserRepository {
  private manager = getConnection().manager;

  async getAllUsers(): Promise<User[]> {
    return this.manager.find(User);
  }
}
