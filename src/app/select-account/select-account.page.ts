import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.page.html',
  styleUrls: ['./select-account.page.scss'],
})
export class SelectAccountPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToCreateAccount() {
    this.navCtrl.navigateForward('/create-account');
  }

  goToTeacherAccount() {
    this.navCtrl.navigateForward('/teacher-account');
  }

  goToSchoolAccount() {
    this.navCtrl.navigateForward('/school-account');
  }

}
