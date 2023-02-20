import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCdAlwaysComponent } from './default/default-cd-always/default-cd-always.component';
import { DefaultOnPushComponent } from './default/default-on-push/default-on-push.component';
import { DefaultRxjsComponent } from './default/default-rxjs/default-rxjs.component';

const routes: Routes = [
  { path: 'default/cd-always', component: DefaultCdAlwaysComponent },
  { path: 'default/on-push', component: DefaultOnPushComponent },
  { path: 'default/rxjs', component: DefaultRxjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
