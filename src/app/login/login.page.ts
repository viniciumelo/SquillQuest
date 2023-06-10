import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CreateAccountPage } from '../create-account/create-account.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToCreateAccount() {
    this.navCtrl.navigateForward('/create-account');
  }

}
