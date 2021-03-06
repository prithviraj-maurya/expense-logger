import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardResize, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { ActionTypes, AppRoutes, Expense } from '../../model/expense';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import * as moment from 'moment';
import { LoadingController } from '@ionic/angular';
import { ActionService } from 'src/app/services/action/action.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showPassword = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('test1@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('hello123', [Validators.required, Validators.min(8)])
  });

  loadingScreen;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private actionService: ActionService,
    private loadingController: LoadingController
  ) {
    Plugins.Device.getInfo().then((deviceInfo) => {
      if (deviceInfo.platform !== 'web') {
        Plugins.Keyboard.setResizeMode({ mode: KeyboardResize.None });
        Plugins.Keyboard.addListener('keyboardWillShow', () => {
          console.log('Keyboard Event');
        });
      }
    });
    this.presentLoading();
  }

  async doLogin(): Promise<void> {
    const { email, password } = this.loginForm.value;
    await this.loadingScreen.present();
    this.authService.loginWithEmailAndPassword(email, password).then(async (res) => {
      await this.loadingScreen.dismiss();
      this.userService.setCurrentUser(res.user);
      console.log("User logged in");
      console.log(res.user);
      this.userService.setInstalledDate(moment(res.user.metadata.creationTime).format('L'));
      let expense: Expense;
      this.actionService.addActivityLog(expense, ActionTypes.LOG_IN);
      this.router.navigateByUrl(AppRoutes.TABS);
    });
  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void { }

  async presentLoading() {
    this.loadingScreen = await this.loadingController.create({
      message: 'Logging in...',
      duration: 2000
    });
    // await this.loadingScreen.present();
    // const { role, data } = await this.loadingScreen.onDidDismiss();
  }
}
