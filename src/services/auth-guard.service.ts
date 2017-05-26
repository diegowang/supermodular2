import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

    constructor(private authService: AuthService, public navCtrl: NavController, public navParams: NavParams) { }
    ionViewCanEnter() {
        let isLoggedIn = this.authService.isLoggedInObs().toPromise();
        //Should redirect to log in page. Implementation needed here
    //    if(!isLoggedIn) {
    //        this.navCtrl.push()
    //    }
        return isLoggedIn;

    }

}