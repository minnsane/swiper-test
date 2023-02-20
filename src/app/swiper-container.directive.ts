import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper, { SwiperOptions } from 'swiper';

@Directive({
  selector: 'swiper-container',
})
export class SwiperContainerDirective implements AfterViewInit, OnDestroy {
  @Input() options: SwiperOptions = {};
  @Input() paginationEl: HTMLElement | null = null;

  @Output() addEvents = new EventEmitter<Swiper>();

  get swiper(): Swiper {
    return this.elRef.nativeElement.swiper;
  }

  constructor(private elRef: ElementRef) {}

  initialized$ = new BehaviorSubject<boolean>(false);

  ngAfterViewInit(): void {
    this.initialize();
  }

  ngOnDestroy(): void {
    this.swiper?.destroy();
  }

  destroy(): void {
    this.swiper?.destroy();
  }

  initialize(): void {
    const swiperEl = this.elRef.nativeElement;

    let params = { ...this.options };

    const { pagination } = this.options;

    if (pagination && typeof pagination === 'object') {
      params = {
        ...params,
        pagination: { ...pagination, el: this.paginationEl },
      };
    }

    Object.assign(swiperEl, params);
    swiperEl.initialize();

    this.addEvents.emit(this.swiper);
  }
}
