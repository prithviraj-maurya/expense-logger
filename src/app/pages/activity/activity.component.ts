import { Component, OnInit } from '@angular/core';
import { ActivityLogs, ExpenseTypes, ActionTypes } from 'src/app/model/expense';
import { ActionService } from 'src/app/services/action/action.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  activityLogs: ActivityLogs[]; 
  constructor(private actionService: ActionService) {
    this.actionService.getActivityLogs().subscribe((logs: ActivityLogs[]) => {
      this.activityLogs = logs;
    });
   }

  ngOnInit() {}

  clearLogs() {
    this.actionService.clearLogs();
  }

}
