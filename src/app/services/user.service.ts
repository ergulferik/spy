import { Injectable, signal } from '@angular/core';
import { GlobalService } from './global.service';

export interface User {
  id: string;
  name: string;
  isSpay: boolean;
  word: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private globalService: GlobalService) {
    const localUsers = localStorage.getItem('users');
    if (localUsers) {
      this.users.set(JSON.parse(localUsers));
    } else {
      this.users.set([]);
    }
  }

  users = signal<User[]>([]);

  addUser(userName: string): void {
    const newUser: User = {
      id: this.globalService.generateUniqueId(),
      name: userName,
      isSpay: false,
      word: '',
    };
    this.users.update(users => [...users, newUser]);
  }

  deleteUser(userId: string): void {
    this.users.update(users => users.filter(user => user.id !== userId));
  }

  assignSpy(): void {
    this.users.update((users: User[]) => {
      if (users.length > 0) {
        let spyCount = 1; 
        if (this.globalService.settings.moreSpy) {
          spyCount = Math.max(1, Math.floor(Math.random() * (users.length / 2)));
        }
        const spyIndexes = new Set<number>();
        while (spyIndexes.size < spyCount) {
          spyIndexes.add(Math.floor(Math.random() * users.length));
        }
        return users.map((user, index) => ({
          ...user,
          isSpay: spyIndexes.has(index),
        }));
      }
      return users;
    });
  }
}
