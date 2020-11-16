import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/expense';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User;

  constructor() { }

  getCurrentUser(): Observable<User> {
    return new Observable(observer => {
      if(this.currentUser) {
        observer.next(this.currentUser);
      }
    });
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
