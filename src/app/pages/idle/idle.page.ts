import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idle',
  templateUrl: './idle.page.html',
  styleUrls: ['./idle.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class IdlePage {
  constructor(private router: Router) {}

  finish() {
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
