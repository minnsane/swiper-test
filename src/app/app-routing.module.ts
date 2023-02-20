import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCdAlwaysComponent } from './default/default-cd-always/default-cd-always.component';

const routes: Routes = [
  { path: 'default/cd-always', component: DefaultCdAlwaysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
