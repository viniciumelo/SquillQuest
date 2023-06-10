import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-discriminacao-page',
  templateUrl: './discriminacao-page.page.html',
  styleUrls: ['./discriminacao-page.page.scss'],
})
export class DiscriminacaoPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToXenofobia(){
    this.navCtrl.navigateForward('/xenofobia-page');
  }
  goToLgbtqia(){
    this.navCtrl.navigateForward('/lgbtqiapage');
  }
  goToRacismo() {
    this.navCtrl.navigateForward('/racismo-page');
  }

  goToSexismo() {
    this.navCtrl.navigateForward('/sexismo-page');
  }

}
