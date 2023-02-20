import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default-rxjs-sticky',
  templateUrl: './default-rxjs-sticky.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultRxjsStickyComponent {}
