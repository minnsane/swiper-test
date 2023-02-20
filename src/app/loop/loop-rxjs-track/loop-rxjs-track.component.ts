import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-loop-rxjs-track',
  templateUrl: './loop-rxjs-track.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoopRxjsTrackComponent {
  numbers$ = new BehaviorSubject<number[]>([1, 2, 3, 4, 5]);

  options: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    initialSlide: Math.floor(Math.random() * this.numbers$.value.length),
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

  changePanelContentsStream(): void {
    const nums = this.numbers$.value;

    this.numbers$.next(nums.map((v) => v * 2));
  }

  changePanelCountStream(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const count = Number(target.value);

    this.numbers$.next(Array.from({ length: count }, (_, i) => i + 1));
  }

  trackByFn(_: number, item: number): string {
    return `change_${new Date().getTime()}_${item}`;
  }
}
