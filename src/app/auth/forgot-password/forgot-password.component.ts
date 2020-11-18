import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppRoutes } from 'src/app/model/expense';
import { ActionService } from 'src/app/services/action/action.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {

  private forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private fireAuth: AngularFireAuth, private actionService: ActionService) {
  }

  onSubmit(): void {
    console.log('Submitting Reset Password Request');
    this.fireAuth.sendPasswordResetEmail(this.forgotPasswordForm.value.email)
    .then(() => this.actionService.presentResetAlert(
      'Password Reset',
      'Sent reset password link over email',
      'Go To Login',
      AppRoutes.LOGIN
    ))
    .catch(err => {
      console.log(err);
      this.actionService.presentResetAlert(
        'Password Rest',
        'Please input valid email',
        'Close',
        AppRoutes.FORGOT_PASSWORD
      )
    });
  }

}
