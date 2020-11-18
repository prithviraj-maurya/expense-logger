import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private alertController: AlertController,private router: Router) { }

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
}
