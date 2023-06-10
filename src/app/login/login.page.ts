import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, set } from 'firebase/database';

import { firebaseConfig } from '../../environments/firebase.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(private navCtrl: NavController) {
    // Inicialize o Firebase com suas credenciais
    firebase.initializeApp(firebaseConfig);}

  ngOnInit() {}

  goToCreateAccount() {
    this.navCtrl.navigateForward('/select-account');
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Login bem-sucedido, redirecione para a próxima página
        this.navCtrl.navigateForward('/');
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error);
      });
  }
}
