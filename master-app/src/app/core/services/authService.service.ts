import { Injectable } from '@angular/core';
import { USERS, User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    authenticatedUser = false;

  login(userId: string, password: string): boolean {
    const usuario = USERS.find((u) => u.userId === userId && u.password === password);
    if (usuario) {
      this.authenticatedUser = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.authenticatedUser = false;
  }

  createUser(user: string, password: string) {
    let id = 3
    var userCreate: User = new User(id++, 'Usuario1', user, password)
    USERS.push(userCreate)
  }
}
