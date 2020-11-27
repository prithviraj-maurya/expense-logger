import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { ActionTypes, ActivityLogs, Expense, StorageKeys } from 'src/app/model/expense';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  activityLogs: ActivityLogs[];
  activityLogsSubject: BehaviorSubject<ActivityLogs[]>;
  constructor(private alertController: AlertController,private router: Router, private storageService: StorageService) {
    this.activityLogs = [];
    this.activityLogsSubject = new BehaviorSubject<ActivityLogs[]>([]);
   }

  getCurrentDateString(date?: Date): string {
    return date ? moment(date).format('L') : moment().format('L');
  }

  getCurrentDate(date?: Date): Date {
    return date ? moment(date).toDate() : moment().toDate();
  }

  createDateFromString(date: string): Date {
    return moment(date).toDate();
  }

  async presentResetAlert(id: string, header: string, btntext: string, routeURL: string) {
    const alert = await this.alertController.create({
      id: id,
      header: header,
      buttons: [{
        text: btntext,
        // handler
      }],
    });
    await alert.present().then(() => {
      this.router.navigateByUrl(routeURL);
    });
  }

  getActivityLogs(): BehaviorSubject<ActivityLogs[]> {
    return this.activityLogsSubject;
  }

  addActivityLog(expense: Expense, action: ActionTypes) {
    let activityLog;
    if(action === ActionTypes.LOG_IN) {
      activityLog = {
        datetime: new Date(),
        category: '',
        actionType: action
      }
    }
    else {
      activityLog = {
        datetime: expense.createdOn,
        category: expense.type,
        actionType: action
      }
    }
    this.activityLogs.push(activityLog);
    this.storageService.setObject(StorageKeys.ACTIVITY_LOGS, this.activityLogs);
    this.activityLogsSubject.next(this.activityLogs);
  }

  clearLogs() {
    this.activityLogs = [];
    this.storageService.setObject(StorageKeys.ACTIVITY_LOGS, this.activityLogs);
    this.activityLogsSubject.next(this.activityLogs);
  }
}
