import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loop-on-push',
  templateUrl: './loop-on-push.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoopOnPushComponent {}
