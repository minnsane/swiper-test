import { Component } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-loop-cd-always',
  templateUrl: './loop-cd-always.component.html',
})
export class LoopCdAlwaysComponent {
  numbers = [1, 2, 3, 4, 5];

  options: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    initialSlide: Math.floor(Math.random() * this.numbers.length),
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

  changePanelContents(): void {
    this.numbers = this.numbers.map((v) => v * 2);
  }

  changePanelCount(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const count = Number(target.value);

    this.numbers = Array.from({ length: count }, (_, i) => i + 1);
  }
}
