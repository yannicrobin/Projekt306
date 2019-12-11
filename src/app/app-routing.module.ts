import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DetailComponent} from './detail/detail.component';
import {OverviewComponent} from './overview/overview.component';
import {LoginComponent} from './login/login.component';
import {GlComponent} from './gl/gl.component';
import {BoardComponent} from './board/board.component';


const routes: Routes = [
  { path: 'overview', component: OverviewComponent},
  { path: 'gl', component: GlComponent},
  { path: 'board', component: BoardComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  bootstrap: [AppComponent],
  entryComponents: [
    DetailComponent,
  ]
})
export class AppRoutingModule { }
