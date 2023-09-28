export class User {
    constructor(public id: number, public name: string, public userId: string, public password: string) {}
}
  
export const USERS: User[] = [
    new User(1, 'Usuario1', 'admin123', 'pass1'),
    new User(2, 'Usuario2', 'admin234', 'pass2'),
];
  