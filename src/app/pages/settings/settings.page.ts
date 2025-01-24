import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  IonCheckbox,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonRadio,
  IonRadioGroup,
} from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonCheckbox,
    IonRadio,
    IonRadioGroup,
  ],
})
export class SettingsPage {
  constructor(
    private modalCtrl: ModalController,
    public globalService: GlobalService
  ) {}

  data = JSON.parse(JSON.stringify(this.globalService.settings));

  close() {
    this.modalCtrl.dismiss();
  }

  save() {
    this.globalService.settings = this.data;
    localStorage.setItem('settings', JSON.stringify(this.data));
    this.close();
  }
}
