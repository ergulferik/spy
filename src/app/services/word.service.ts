import { effect, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { words } from '../data/word';
import { User, UserService } from './user.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  selectedWord = signal<string>('');
  spyWord = signal<string>('');
  private proxyUrl = environment.proxyAPI;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private globalService: GlobalService
  ) {}

  async generateRandomWord() {
    if (this.globalService.settings.fetchType == 'file') {
      await this.randomWordByData();
    } else {
      await this.randomWordByAPI();
    }
    this.updateUserWords();
  }

  private async randomWordByAPI(): Promise<void> {
    const requestPayload = {
      url: 'https://rastgele.net/api/get-random',
      method: 'POST',
      headers: {},
      body: {
        q: 'kelime',
      },
    };

    const res: string | undefined = await this.http
      .post(this.proxyUrl + '/proxy-request', requestPayload, {
        responseType: 'text',
      })
      .toPromise();
    if (res && !res.includes('(İsim)')) {
      this.randomWordByAPI();
    } else {
      this.selectedWord.set(res?.split(' ')[0] || '');
    }
  }

  private randomWordByData() {
    const randomIndex = Math.floor(Math.random() * words.length);
    this.selectedWord.set(words[randomIndex][0]);
    this.spyWord.set(words[randomIndex][1]);
  }

  private updateUserWords() {
    this.userService.users.update((users: User[]) => {
      return users.map(user => {
        if (user.isSpay) {
          user.word = this.globalService.settings.spyWord
            ? this.spyWord()
            : 'Casus Sensin';
        } else {
          user.word = this.selectedWord();
        }
        return user;
      });
    });
  }
}
