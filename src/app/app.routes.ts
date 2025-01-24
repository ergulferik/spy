import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'game',
    loadComponent: () => import('./pages/game/game.page').then(m => m.GamePage),
  },
  {
    path: 'idle',
    loadComponent: () => import('./pages/idle/idle.page').then(m => m.IdlePage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then(m => m.SettingsPage),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
