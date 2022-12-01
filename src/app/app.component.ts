import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public splashScreen: SplashScreen, public plt: Platform) {
    this.plt.ready().then(()=>{
      this.splashScreen.hide();
    });
  }
}
