import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
  _user: any;
  loadedUserSub: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  ionViewDidLoad() {
    this.loadedUserSub = this.authService.userLoadededEvent.subscribe(user => {
      this._user = user;
    })
  }

  clearState() {
    this.authService.clearState();
  }
  getUser() {
    this.authService.getUser();
  }
  removeUser() {
    this.authService.removeUser();
  }
  startSigninMainWindow() {
    this.authService.startSigninMainWindow();
  }
  endSigninMainWindow() {
    this.authService.endSigninMainWindow();
  }
  startSignoutMainWindow() {
    this.authService.startSignoutMainWindow();
  }
  endSignoutMainWindow() {
    this.authService.endSigninMainWindow();
  }

  ionViewWillUnload() {
    if(this.loadedUserSub.unsubscribe()){
      this.loadedUserSub.unsubscribe();
    }
  }

}
