import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/model/expense';
import { UserService } from 'src/app/services/user/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  showPassword = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.min(8), Validators.required]),
    passwordConfirm: new FormControl('', [Validators.min(8), Validators.required])
  });

  constructor(private fireAuth: AngularFireAuth, private router: Router, private userService: UserService) { }

  ngOnInit() { }

  doRegister() {
    const { email, password } = this.registerForm.value;
    email && password && this.fireAuth.createUserWithEmailAndPassword(email, password).then(response => {
      if (response !== null) {
        this.userService.setInstalledDate(moment().format("L"));
        this.router.navigateByUrl(AppRoutes.LOGIN)
      };
    });
  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
  }

}
