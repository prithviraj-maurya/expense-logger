import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor() { }

  getCurrentDateString(date?: Date): string {
    return date ? moment(date).format('L') : moment().format('L');
  }

  getCurrentDate(date?: Date): Date {
    return date ? moment(date).toDate() : moment().toDate();
  }

  createDateFromString(date: string): Date {
    return moment(date).toDate();
  }
}
