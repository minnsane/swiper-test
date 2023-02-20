import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loop-rxjs-child',
  templateUrl: './loop-rxjs-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoopRxjsChildComponent {}
