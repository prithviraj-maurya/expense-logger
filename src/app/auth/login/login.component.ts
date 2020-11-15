import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeyboardResize, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../../model/expense';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showPassword = false;

  private loginForm: FormGroup = new FormGroup({
    email: new FormControl('test1@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('hello123', [Validators.required, Validators.min(8)])
  });

  constructor(
    private router: Router,
  ) {
    // Plugins.Device.getInfo().then((deviceInfo) => {
    //   if (deviceInfo.platform !== 'web') {
    //     Plugins.Keyboard.setResizeMode({ mode: KeyboardResize.None });
    //     Plugins.Keyboard.addListener('keyboardWillShow', () => {
    //       console.log('Keyboard Event');
    //     });
    //   }
    // });

  }

  doLogin(): void {
   
  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
  }
}
