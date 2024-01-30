/**
 * Component representing a movie card in the application.
 * @module movie-card
 */

import { Component, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieInfoComponent } from '../movie-info/movie-info.component';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Angular component decorator and metadata.
 * @component
 */

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() onFavoriteToggle: (movieId: string) => void;
  @Input() favoriteMovies: string[];
  
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.onFavoriteToggle = (movieId: string) => {};
    this.favoriteMovies = [];
  }

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Opens a dialog displaying genre information.
   * @param {string} name - Genre name.
   * @param {string} description - Genre description.
   */


  openGenre(name: string, description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: description
      },
    });
  }


  /**
   * Opens a dialog displaying director information.
   * @param {string} name - Director name.
   * @param {string} bio - Director biography.
   */

  openDirector(name: string, bio: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: bio
      },
    });
  }

 /**
   * Opens a dialog displaying movie synopsis.
   * @param {string} description - Movie synopsis.
   */

  openSynopsis(description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: 'Synopsis',
        content: description
      },
    });
  }

 /**
   * Fetches all movies from the API.
   */

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }


  /**
   * Opens a dialog displaying movie information.
   * @param {string} title - Movie title.
   * @param {string} content - Movie content.
   */

  openMovieInfoDialog(title: string, content: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: { title, content },
    });
  }

   /**
   * Toggles the favorite status of the movie.
   */
  toggleFavorite(): void {
    const movieId = this.movie._id;
    const isFavorite = this.isFavorite();
  
    if (isFavorite) {
      this.removeFavorite(movieId);
      this.favoriteMovies = this.favoriteMovies.filter(id => id !== movieId);
    } else {
      this.addFavorite(movieId);
      this.favoriteMovies.push(movieId);
    }
  
    // Notify the parent component about the change
    this.onFavoriteToggle(movieId);
  }

  /**
   * Checks if the current movie is in the list of favorite movies.
   * @returns {boolean} - True if the movie is a favorite, false otherwise.
   */

  isFavorite(): boolean {
    return this.favoriteMovies.includes(this.movie._id);
  }
 /**
   * Adds a movie to the list of favorite movies.
   * Displays a notification on success or an error message on failure.
   * @param {string} id - Movie ID.
   */
  addFavorite(id: string): void {
    this.fetchApiData.addFavoriteMovie(id).subscribe(() => {
      this.snackBar.open('Movie added to favorites.', 'OK', {
        duration: 2000
      });
    }, (error) => {
      console.error('Error adding movie to favorites:', error);
    });
  }

   /**
   * Removes a movie from the list of favorite movies.
   * Displays a notification on success or an error message on failure.
   * @param {string} id - Movie ID.
   */
  removeFavorite(id: string): void {
    this.fetchApiData.deleteFavoriteMovie(this.movie.Username.id).subscribe(
      () => {
        this.snackBar.open('Movie removed from favorites.', 'OK', { duration: 2000 });
      },
      (error) => {
        console.error('Error removing movie from favorites:', error);
      }
    );
  }
 /**
   * Checks if a movie with a given ID is in the list of favorite movies.
   * @param {string} movieId - Movie ID.
   * @returns {boolean} - True if the movie is a favorite, false otherwise.
   */
  
  isFavoriteById(movieId: string): boolean {
    return this.favoriteMovies.includes(movieId);
  }

}
