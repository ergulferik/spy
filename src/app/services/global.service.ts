import { Injectable } from '@angular/core';

export interface Settings {
  spyWord: boolean;
  moreSpy: boolean;
  fetchType: 'web' | 'file';
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  settings!: Settings;

  constructor() {
    const localSettings = localStorage.getItem('settings');
    if (localSettings) {
      this.settings = JSON.parse(localSettings);
    } else {
      this.settings = {
        spyWord: true,
        moreSpy: false,
        fetchType: 'file',
      };
    }
  }

  generateUniqueId(): string {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8);
    const uniqueId = `${timestamp}-${randomPart}`;
    return uniqueId;
  }
}
