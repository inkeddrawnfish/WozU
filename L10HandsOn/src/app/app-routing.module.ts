import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'chooseCity',

  }
  
  // you'll need a path for selecting the city
    // you'll need a path for the weather for a specific city
    // for root, add a redirect to the city path
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
