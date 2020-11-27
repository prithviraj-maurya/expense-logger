import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageKeys, User } from 'src/app/model/expense';
import { StorageService } from '../storage/storage.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserObservable: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private currentUser: User;

  constructor(private storageService: StorageService) {
    this.getCurrentUser().then(user => {
      this.currentUserObservable.next(user);
    })
  }

  getCurrentUserBehaviour(): BehaviorSubject<User> {
    return this.currentUserObservable;
  }

  getCurrentUser(): Promise<User> {
    return this.storageService.getObject(StorageKeys.ACTIVE_USER);
  }

  setCurrentUser(user: User) {
    this.currentUser = <User>user;
    this.storageService.setObject(StorageKeys.ACTIVE_USER, user);
    this.currentUserObservable.next(this.currentUser);
  }

  setInstalledDate(date) {
    this.storageService.setObject(StorageKeys.INSTALL_DATE, date);
  }

}