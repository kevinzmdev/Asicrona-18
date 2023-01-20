import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,

  ],
  exports: [
    NavComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
