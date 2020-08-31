import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { CardsComponent } from './cards/cards.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'cards',
    component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
