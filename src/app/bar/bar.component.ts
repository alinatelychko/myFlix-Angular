/**
 * Component representing the top bar of the application.
 * @module bar
 */

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLoggedIn: boolean = false;
  showTopBar: boolean = true;

  constructor(private router: Router) {
    // Check if the user is logged in
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  ngOnInit(): void {
    // Subscribe to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide the top bar on the WelcomePage
        this.showTopBar = !event.url.includes('/welcome');
      }
    });
  }

  toMovies(): void {
    this.router.navigate(['movies']);
  }

  toProfile(): void {
    this.router.navigate(['profile']);
  }

  logOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
    this.isLoggedIn = false;
  }
}