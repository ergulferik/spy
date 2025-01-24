import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { WordService } from 'src/app/services/word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class GamePage implements OnInit {
  activeIndex = 0;
  cardSide: 'side-front' | 'side-back' = 'side-front';

  constructor(
    public userService: UserService,
    public wordService: WordService,
    private router: Router
  ) {}

  ngOnInit() {}

  cardClick() {
    if (this.cardSide == 'side-front') {
      this.cardSide = 'side-back';
    } else {
      this.cardSide = 'side-front';
      this.activeIndex += 1;
      if (this.activeIndex >= this.userService.users().length) {
        this.router.navigate(['/idle']);
      }
    }
  }
}
