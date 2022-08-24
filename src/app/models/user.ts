import { Role } from "./role";

export class User {
    id: any;
    username: string | any;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined
    phone:string | undefined;
    password: string | undefined;
    roles: Role | undefined;
    token?: string;
}