import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-default-rxjs-sticky',
  templateUrl: './default-rxjs-sticky.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultRxjsStickyComponent {
  numbers$ = new BehaviorSubject<number[]>([1, 2, 3, 4, 5]);

  options: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      type: 'bullets',
    },
    navigation: true,
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
}
