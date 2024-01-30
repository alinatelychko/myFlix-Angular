/**
 * Component for user profile details and management.
 * @module user-profile
 */

import { Component, OnInit, Input } from '@angular/core';

// // You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// // This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

import { formatDate } from '@angular/common';

/**
 * Component class for user profile details and management.
 * @class
 */

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  user: any = {};
  favoriteMovies: any[] = [];

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };


  /**
   * Constructor for UserProfileComponent.
   * @constructor
   * @param {FetchApiDataService} fetchApiData - Service for fetching API data.
   * @param {MatSnackBar} snackBar - Service for displaying snack bar notifications.
   * @param {Router} router - Angular router service.
   */

  constructor(
    public fetchApiData: FetchApiDataService,
    //public dialogRef: MatDialogRef<UserProfileComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

   /**
   * Lifecycle hook called after component initialization.
   * @function
   */

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Fetches user details and favorite movies.
   * @function
   */
  getUser(): void {
    this.user = this.fetchApiData.getOneUser();
    this.userData.Username = this.user.Username;
    this.userData.Email = this.user.Email;
    // this.user.Birthday comes in as ISOString format, like so: "2011-10-05T14:48:00.000Z"
    this.userData.Birthday = formatDate(this.user.Birthday, 'yyyy-MM-dd', 'en-US', 'UTC+0');
  
    // Fetch favorite movies using the user's FavoriteMovies array
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.favoriteMovies = resp.filter((m: { _id: any }) => this.user.FavoriteMovies.includes(m._id));
    });
  }
  
/**
   * Edits user details.
   * @function
   */

  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((result) => {
      localStorage.setItem('user', JSON.stringify(result));

      this.snackBar.open('User successfully updated', 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

  /**
   * Deletes user account.
   * @function
   */
  
  deleteUser(): void {
    this.fetchApiData.deleteUser().subscribe((result) => {
      localStorage.clear();
      this.router.navigate(['welcome']);
      this.snackBar.open('User successfully deleted', 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }
}