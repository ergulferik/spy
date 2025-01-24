import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonIcon,
  IonContent,
  ModalController,
} from '@ionic/angular/standalone';
import { SettingsPage } from './pages/settings/settings.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonIcon,
    IonContent
],
})
export class AppComponent {
  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  goTo(route: string) {
    this.router.navigate([route], { replaceUrl: true });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });
    modal.present();
  }
}
