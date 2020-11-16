import { Injectable } from '@angular/core';
import { User } from 'src/app/model/expense';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User;

  constructor() { }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
