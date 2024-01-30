/**
 * User registration form component.
 * @module user-registration-form
 */


import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Component decorator specifying selector, template, and styles.
 * @class
 */

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

   /**
   * Constructor for UserRegistrationFormComponent.
   * @constructor
   * @param {FetchApiDataService} fetchApiData - Service for fetching API data.
   * @param {MatDialogRef<UserRegistrationFormComponent>} dialogRef - Reference to the dialog.
   * @param {MatSnackBar} snackBar - Service for displaying snack bar notifications.
   */

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }


  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties.
   * @function
   */

  ngOnInit(): void {
  }


  /**
   * Function responsible for sending the form inputs to the backend for user registration.
   * @function
   */

  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((response) => {
      
      console.log(response)
      this.dialogRef.close(); // This will close the modal on success!
      this.snackBar.open('User successfully registered', 'OK', {
        duration: 2000
      });
    }, (response) => {
      console.log(response)
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }

}
