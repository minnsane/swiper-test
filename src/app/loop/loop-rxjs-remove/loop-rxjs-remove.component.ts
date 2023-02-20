import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SwiperContainerDirective } from 'src/app/swiper-container.directive';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-loop-rxjs-remove',
  templateUrl: './loop-rxjs-remove.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoopRxjsRemoveComponent {
  @ViewChild(SwiperContainerDirective)
  swiperContainer?: SwiperContainerDirective;

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
    swiper.on('update', () => console.log('swiper updated'));
  }

  changePanelContentsStream(): void {
    const nums = this.numbers$.value;

    this.changeNumStream(nums.map((v) => v * 2));
  }

  changePanelCountStream(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const count = Number(target.value);

    this.changeNumStream(Array.from({ length: count }, (_, i) => i + 1));
  }

  private changeNumStream(numbers: number[]): void {
    this.swiperContainer?.swiper.removeAllSlides();
    this.numbers$.next(numbers);
    setTimeout(() => this.swiperContainer?.swiper.update(), 0);
  }
}
