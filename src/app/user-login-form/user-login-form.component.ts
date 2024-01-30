/**
 * Component for the user login form.
 * @module user-login-form
 */

import { Component, OnInit, Input } from '@angular/core';

// This import is used to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; 

/**
 * UserLoginFormComponent class.
 * @class
 */

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() loginData = { Username: '', Password: '' };

 /**
   * Constructor of UserLoginFormComponent.
   * @constructor
   * @param {FetchApiDataService} fetchApiData - Service for making API calls.
   * @param {MatDialogRef<UserLoginFormComponent>} dialogRef - Reference to the dialog.
   * @param {MatSnackBar} snackBar - Service for displaying snack bar notifications.
   * @param {Router} router - Angular router service.
   */

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
    ) {}

    /**
   * Lifecycle hook called after component initialization.
   * @method
   */
  ngOnInit(): void {
  }

 /**
   * Function responsible for sending the user login form inputs to the backend.
   * @method
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.loginData).subscribe((result) => {
      // Logic for a successful user login goes here! (To be implemented)
      console.log(result);
      localStorage.setItem('username', result.user.Username);
      localStorage.setItem('token', result.token);
      this.dialogRef.close(); // This will close the modal on success!
      this.snackBar.open('Logged in', 'OK', {
        duration: 2000
      });

      this.router.navigate(['movies']);

    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

}
