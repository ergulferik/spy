import { Component, effect } from '@angular/core';
import { IonIcon, IonRippleEffect } from '@ionic/angular/standalone';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { fadeRight } from '../../animations/animations';
import { WordService } from '../../services/word.service';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonRippleEffect, FormsModule, MatRippleModule],
  animations: [fadeRight],
})
export class HomePage {
  userName: string = '';

  constructor(
    public userService: UserService,
    private wordService: WordService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.userName.trim().length > 0) {
      this.userService.addUser(this.userName);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.userName = '';
  }

  start() {
    localStorage.setItem('users', JSON.stringify(this.userService.users()));
    this.wordService.generateRandomWord();
    this.userService.assignSpy();
    this.router.navigate(['/game']);
  }
}
