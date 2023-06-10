import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, set } from 'firebase/database';
import { NavController } from '@ionic/angular';


import { firebaseConfig } from '../../environments/firebase.config';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  name = '';
  email = '';
  school = '';
  password = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Inicializar o Firebase
    firebase.initializeApp(firebaseConfig);
  }

  createAccount() {
    const { name, email, school, password } = this;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        // Usuário criado com sucesso
        const user = userCredential.user;
  
        // Salvar informações adicionais do usuário no banco de dados
        set(ref(getDatabase(), 'users/' + user.uid), {
          name: name,
          school: school,
          email: email,
        })
          .then(() => {
            console.log('Informações adicionais salvas no banco de dados com sucesso');
            this.navCtrl.navigateRoot('/'); // Redirecionar para a próxima página
          })
          .catch((error: any) => {
            console.error('Erro ao salvar informações adicionais no banco de dados:', error);
          });
      })
      .catch((error: any) => {
        console.error('Erro ao criar conta de usuário:', error);
      });
  }
  
  
}
