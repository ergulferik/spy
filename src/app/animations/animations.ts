import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeRight = trigger('fadeRight', [
  // Giriş animasyonu (void -> *)
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(100%)',
    }),
    animate(
      '0.3s ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
  ]),

  // Çıkış animasyonu (* -> void)
  transition('* => void', [
    animate(
      '0.3s ease-in',
      style({
        opacity: 0,
        transform: 'translateX(100%)',
      })
    ),
  ]),
]);
