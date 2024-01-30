
/**
 * Component for the welcome page.
 * @module WelcomePageComponent
 */

import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';


/**
 * The WelcomePageComponent class.
 * @class
 */

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

    /**
   * Constructor of the WelcomePageComponent.
   * @constructor
   * @param {MatDialog} dialog - Angular Material dialog service for opening dialogs.
   */

  constructor(public dialog: MatDialog) { }

/**
   * Lifecycle hook called after the component has been initialized.
   * @lifecycle
   */
  ngOnInit(): void {
  }

  /**
   * Opens the user registration dialog.
   * @function
   */

  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the user login dialog.
   * @function
   */
  
openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }
}