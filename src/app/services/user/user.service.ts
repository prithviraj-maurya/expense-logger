import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageKeys, User } from 'src/app/model/expense';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserObservable: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private currentUser: User;

  constructor(private storageService: StorageService) { }

  getCurrentUser(): BehaviorSubject<User> {
    return this.currentUserObservable;
  }

  setCurrentUser(user: User) {
    this.currentUser = <User>user;
    this.storageService.setObject(StorageKeys.ACTIVE_USER, user);
    this.currentUserObservable.next(this.currentUser);
  }

}