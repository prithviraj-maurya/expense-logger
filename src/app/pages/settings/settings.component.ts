import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppRoutes, User } from 'src/app/model/expense';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  currentUser: User;

  constructor(private dataService: DataService,
    private alertController: AlertController,
    private authService: AuthService,
    private userService: UserService,
    private router: Router) {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() { }

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

  doLogout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl(AppRoutes.LOGIN);
    });
  }
}
