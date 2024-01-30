
/**
 * Component for displaying detailed information about a movie in a dialog.
 * @module movie-info
 */

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * MovieInfoComponent class.
 * @class
 */

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent {

   /**
   * Constructor for MovieInfoComponent.
   * @constructor
   * @param {any} data - Data injected into the component for display.
   */
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}