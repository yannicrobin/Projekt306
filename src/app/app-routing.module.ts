import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  bootstrap: [AppComponent],
  entryComponents: [
    DetailComponent,
  ]
})
export class AppRoutingModule { }
