import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-loop-rxjs-child',
  templateUrl: './loop-rxjs-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoopRxjsChildComponent {
  @Input()
  numbers?: number[] | null;

  options: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    pagination: {
      type: 'custom',
      renderCustom: (swiper: Swiper, _current: number, total: number) =>
        `<span>${swiper.realIndex + 1}</span> / <span>${total}</span>`,
    },
  };

  addEvents(swiper: Swiper): void {
    swiper.on('destroy', () => console.log('swiper destroyed'));
    swiper.on('realIndexChange', (swiper) =>
      console.log('swiper index: ', swiper.realIndex)
    );
  }
}
