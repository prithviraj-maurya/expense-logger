import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() { }

  doRegister() {
    console.log(this.registerForm);
  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
  }

}
