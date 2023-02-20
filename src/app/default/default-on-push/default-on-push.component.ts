import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default-on-push',
  templateUrl: './default-on-push.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultOnPushComponent {}
