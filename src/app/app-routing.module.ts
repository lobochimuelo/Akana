import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageFourComponent } from './components/page-four/page-four.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'one', component: PageOneComponent },
  { path: 'two', component: PageTwoComponent },
  { path: 'three', component: PageThreeComponent },
  { path: 'four', component: PageFourComponent },
  // { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
