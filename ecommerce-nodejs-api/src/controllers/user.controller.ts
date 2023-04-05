import express, { Router } from "express";
import { UserService } from "../services/user.service";
import {ResponseEntity} from "../types/response-entity";
import {UserResponse} from "../types/user.response";

export class UserController {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.router.get("/users", this.getAllUsers);
    // this.router.get("/users/:id", this.getUserById);
    // this.router.post("/users", this.createUser);
    // this.router.put("/users/:id", this.updateUser);
    // this.router.delete("/users/:id", this.deleteUser);
  }

  async getAllUsers(req: express.Request, res: express.Response): Promise<void> {
    const userService: UserService = new UserService();
    const users = await userService.getAllUsers();
    const response: ResponseEntity<UserResponse> = {
      total: users.length,
      content: users,
    }
    res.status(200).json(response);
  }
  //
  // getUserById(req: express.Request, res: express.Response) {
  //   const userId = Number(req.params.id);
  //   const userService: UserService = new UserService();
  //   const user = userService.getUserById(userId);
  //   res.status(200).json(user);
  // }
  //
  // createUser(req: express.Request, res: express.Response) {
  //   const newUser = req.body;
  //   const userService: UserService = new UserService();
  //   const user = userService.createUser(newUser);
  //   res.status(201).json(user);
  // }
  //
  // updateUser(req: express.Request, res: express.Response) {
  //   const userId = Number(req.params.id);
  //   const updatedUser = req.body;
  //   const userService: UserService = new UserService();
  //   const user = userService.updateUser(userId, updatedUser);
  //   res.status(200).json(user);
  // }
  //
  // deleteUser(req: express.Request, res: express.Response) {
  //   const userId = Number(req.params.id);
  //   const userService: UserService = new UserService();
  //   userService.deleteUser(userId);
  //   res.status(204).send();
  // }
}
