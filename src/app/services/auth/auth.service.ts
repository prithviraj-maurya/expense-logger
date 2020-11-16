import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  async loginWithEmailAndPassword(email: string, password: string): Promise<any> {
    if (email && password) {
      return this.fireAuth.signInWithEmailAndPassword(email, password);
    }
  }


  // RegisterWithEmailAndPassword
  async registerWithEmailAndPassword(email: string, password: string): Promise<any> {
    if (email && password) {
      return await this.fireAuth.createUserWithEmailAndPassword(email, password);
    }
  }

  // Logout
  async logout(): Promise<void> {
    return await this.fireAuth.signOut();
  }
}
