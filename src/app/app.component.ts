/**
 * The root component of the Angular application.
 * Responsible for displaying the main application layout.
 * @module AppComponent
 */

import { Component } from '@angular/core';

/**
 * The root component class.
 * @class
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   /**
   * The title of the application.
   * @property {string}
   */
  
  title = 'myFlix-Angular-client';
}