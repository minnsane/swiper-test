import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperContainerDirective } from './swiper-container.directive';
import { DefaultCdAlwaysComponent } from './default/default-cd-always/default-cd-always.component';
import { DefaultOnPushComponent } from './default/default-on-push/default-on-push.component';
import { DefaultRxjsComponent } from './default/default-rxjs/default-rxjs.component';
import { DefaultRxjsStickyComponent } from './default/default-rxjs-sticky/default-rxjs-sticky.component';
import { LoopCdAlwaysComponent } from './loop/loop-cd-always/loop-cd-always.component';
import { LoopRxjsComponent } from './loop/loop-rxjs/loop-rxjs.component';
import { LoopRxjsTrackComponent } from './loop/loop-rxjs-track/loop-rxjs-track.component';
import { LoopRxjsRemoveComponent } from './loop/loop-rxjs-remove/loop-rxjs-remove.component';
import { LoopRxjsChildComponent } from './loop/loop-rxjs-child/loop-rxjs-child.component';
import { LoopRxjsStickyComponent } from './loop/loop-rxjs-sticky/loop-rxjs-sticky.component';
import { LoopOnPushComponent } from './loop/loop-on-push/loop-on-push.component';
import { ParentWrapperComponent } from './parent-wrapper/parent-wrapper.component';

@NgModule({
  declarations: [AppComponent, SwiperContainerDirective, DefaultCdAlwaysComponent, DefaultOnPushComponent, DefaultRxjsComponent, DefaultRxjsStickyComponent, LoopCdAlwaysComponent, LoopRxjsComponent, LoopRxjsTrackComponent, LoopRxjsRemoveComponent, LoopRxjsChildComponent, LoopRxjsStickyComponent, LoopOnPushComponent, ParentWrapperComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    register();
  }
}
