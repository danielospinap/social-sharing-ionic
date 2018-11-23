import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from "@ionic-native/social-sharing";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {

  }

  shareViaFacebookWithPasteMessageHint() {
    this.socialSharing.shareViaFacebookWithPasteMessageHint(
      "Test", 
      "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png", 
      "", 
      "hola"
    ).then(() => {
      console.log("OK");
    }).catch(() => {
      console.log("ERROR");
    })
  }

}
