import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/model/expense';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  showPassword = false;

  private registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.min(8), Validators.required]),
    passwordConfirm: new FormControl('', [Validators.min(8), Validators.required])
  });

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  doRegister() {
    const { email, password } = this.registerForm.value;
    email && password && this.fireAuth.createUserWithEmailAndPassword(email, password).then(response => {
      return response !== null ? this.router.navigateByUrl(AppRoutes.LOGIN) : false;
    });
  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
  }

}
