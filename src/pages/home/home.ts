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
      "Test shareViaFacebookWithPasteMessageHint", 
      "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png", 
      "", 
      "hint"
    ).then(() => {
      console.log("OK");
    }).catch(() => {
      console.log("ERROR");
    })
  }

  shareViaFacebook() {
    this.socialSharing.shareViaFacebook(
      "Test shareViaFacebook",
      "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png", 
      ""
    )
  }

}
