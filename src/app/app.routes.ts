/**
 * Routing module for the Angular application.
 * Defines the application routes using the RouterModule.
 * @module AppRoutingModule
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [];

/**
 * Angular module for routing in the application.
 * Imports the RouterModule with the defined routes and exports it.
 * @class AppRoutingModule
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
