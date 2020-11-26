import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardResize, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../../model/expense';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import * as moment from 'moment';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {
    Plugins.Device.getInfo().then((deviceInfo) => {
      if (deviceInfo.platform !== 'web') {
        Plugins.Keyboard.setResizeMode({ mode: KeyboardResize.None });
        Plugins.Keyboard.addListener('keyboardWillShow', () => {
          console.log('Keyboard Event');
        });
      }
    });
  }

  doLogin(): void {
    const { email, password } = this.loginForm.value;
    this.authService.loginWithEmailAndPassword(email, password).then((res) => {
      this.userService.setCurrentUser(res.user);
      console.log("User logged in");
      console.log(res.user);
      this.userService.setInstalledDate(moment(res.user.metadata.creationTime).format('L'));
      this.router.navigateByUrl(AppRoutes.TABS);
    });
  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void { }
}
