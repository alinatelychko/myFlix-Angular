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

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openMovieInfoDialog(title: string, content: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: { title, content },
    });
  }

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
    this.fetchApiData.deleteFavoriteMovie(this.movie.Username.id).subscribe(
      () => {
        this.snackBar.open('Movie removed from favorites.', 'OK', { duration: 2000 });
      },
      (error) => {
        console.error('Error removing movie from favorites:', error);
      }
    );
  }

  isFavoriteById(movieId: string): boolean {
    return this.favoriteMovies.includes(movieId);
  }

}
