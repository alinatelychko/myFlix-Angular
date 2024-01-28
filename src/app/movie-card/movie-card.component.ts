import { Component, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieInfoComponent } from '../movie-info/movie-info.component';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() onFavoriteToggle: (movieId: string) => void;
  @Input() favoriteMovies: string[];

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.onFavoriteToggle = (movieId: string) => {};
    this.favoriteMovies = [];
  }

  openGenre(name: string, description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: description
      },
    });
  }

  openDirector(name: string, bio: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: bio
      },
    });
  }

  openSynopsis(description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: 'Synopsis',
        content: description
      },
    });
  }

  openMovieInfoDialog(title: string, content: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: { title, content },
    });
  }

  toggleFavorite(): void {
    const movieId = this.movie._id;
    this.onFavoriteToggle(movieId);
    if (this.isFavorite()) {
      this.addFavorite(movieId);
    } else {
      this.removeFavorite(movieId);
    }
  }

  isFavorite(): boolean {
    return this.favoriteMovies.includes(this.movie._id);
  }

  addFavorite(id: string): void {
    this.fetchApiData.addFavoriteMovie(id).subscribe(() => {
      this.snackBar.open('Movie added to favorites.', 'OK', {
        duration: 2000
      });
    }, (error) => {
      console.error('Error adding movie to favorites:', error);
    });
  }

  removeFavorite(id: string): void {
    this.fetchApiData.deleteFavoriteMovie(id).subscribe(() => {
      this.snackBar.open('Movie removed from favorites.', 'OK', {
        duration: 2000
      });
    }, (error) => {
      console.error('Error removing movie from favorites:', error);
    });
  }
}
