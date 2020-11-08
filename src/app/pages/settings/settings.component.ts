import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private dataService: DataService, private alertController: AlertController) { }

  ngOnInit() {}

  clearData() {
    this.dataService.resetExpenses().then(() => {
      this.presentResetAlert();
    });
  }

  async presentResetAlert(handler?: any) {
    const alert = await this.alertController.create({
        id: 'appResetAlert',
        header: 'App Reset Successful!',
        buttons: [{
            text: 'Go To Login',
            handler
        }],
    });
    await alert.present();
}
}
