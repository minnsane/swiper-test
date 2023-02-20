import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCdAlwaysComponent } from './default/default-cd-always/default-cd-always.component';
import { DefaultOnPushComponent } from './default/default-on-push/default-on-push.component';
import { DefaultRxjsStickyComponent } from './default/default-rxjs-sticky/default-rxjs-sticky.component';
import { DefaultRxjsComponent } from './default/default-rxjs/default-rxjs.component';
import { LoopCdAlwaysComponent } from './loop/loop-cd-always/loop-cd-always.component';
import { LoopOnPushComponent } from './loop/loop-on-push/loop-on-push.component';
import { LoopRxjsChildComponent } from './loop/loop-rxjs-child/loop-rxjs-child.component';
import { LoopRxjsRemoveComponent } from './loop/loop-rxjs-remove/loop-rxjs-remove.component';
import { LoopRxjsStickyComponent } from './loop/loop-rxjs-sticky/loop-rxjs-sticky.component';
import { LoopRxjsTrackComponent } from './loop/loop-rxjs-track/loop-rxjs-track.component';
import { LoopRxjsComponent } from './loop/loop-rxjs/loop-rxjs.component';
import { ParentWrapperComponent } from './parent-wrapper/parent-wrapper.component';

const routes: Routes = [
  { path: 'default/cd-always', component: DefaultCdAlwaysComponent },
  { path: 'default/on-push', component: DefaultOnPushComponent },
  { path: 'default/rxjs', component: DefaultRxjsComponent },
  { path: 'default/rxjs-sticky', component: DefaultRxjsStickyComponent },
  { path: 'loop/cd-always', component: LoopCdAlwaysComponent },
  { path: 'loop/on-push', component: LoopOnPushComponent },
  { path: 'loop/rxjs', component: LoopRxjsComponent },
  { path: 'loop/rxjs-child', component: ParentWrapperComponent },
  { path: 'loop/rxjs-remove', component: LoopRxjsRemoveComponent },
  { path: 'loop/rxjs-sticky', component: LoopRxjsStickyComponent },
  { path: 'loop/rxjs-track', component: LoopRxjsTrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
