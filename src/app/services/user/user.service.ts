import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/expense';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserObservable: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private currentUser: User;

  constructor() { }

  getCurrentUser(): BehaviorSubject<User> {
    return this.currentUserObservable;
  }

  setCurrentUser(user: User) {
    this.currentUser = <User>user;
    this.currentUserObservable.next(this.currentUser);
  }

}