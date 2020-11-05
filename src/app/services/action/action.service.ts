import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor() { }

  getCurrentDate(date?: Date): string {
    return date ? moment(date).format('L') : moment().format('L');
  }
}
