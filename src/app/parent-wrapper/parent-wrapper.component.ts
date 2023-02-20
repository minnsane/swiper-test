import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-parent-wrapper',
  templateUrl: './parent-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentWrapperComponent {
  numbers$ = new BehaviorSubject<number[]>([1, 2, 3, 4, 5]);

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
