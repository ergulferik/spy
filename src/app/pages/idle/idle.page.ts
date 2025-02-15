import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/services/user.service';
import { IonIcon, IonAlert } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/services/global.service';
import { fadeRight } from '../../animations/animations';

@Component({
  selector: 'app-idle',
  templateUrl: './idle.page.html',
  styleUrls: ['./idle.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon, IonAlert],
  animations: [fadeRight]
})
export class IdlePage {
  filteredUsers = signal<User[]>([]);
  isAlertOpen = false
  alertButtons = ['Tamam'];
  spyWinner=false

  constructor(private router: Router, public userService:UserService, private globalService:GlobalService) {
    this.filteredUsers.set(userService.users())
  }

  finish() {
    this.router.navigate(['/'], { replaceUrl: true });
  }

  selectSpy(user:User){
      this.filteredUsers.set(this.filteredUsers().filter(fu=> fu.id !== user.id))

    if(this.filteredUsers().every(fu => fu.isSpay === true)){
      this.isAlertOpen = true
      this.spyWinner = true
      //casuslar kazandı
    }else if (this.filteredUsers().every(fu => fu.isSpay === false)){
      //masumlar kazandı
      this.isAlertOpen = true
      this.spyWinner = false
    }
  }
}
