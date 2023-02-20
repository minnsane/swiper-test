import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default-rxjs',
  templateUrl: './default-rxjs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultRxjsComponent {}
