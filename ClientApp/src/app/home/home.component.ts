import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public watchedMovies: Movie[]= [];
  public suggestedMovies: Movie[]= [];
  public userId = 93350;

  constructor(private movieSevice: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieSevice.getWatchedMoviesByUserId(this.userId).subscribe(data => {
      this.watchedMovies = data;
    });

    this.movieSevice.getSuggestedMoviesByUserId(this.userId).subscribe(data => {
      this.suggestedMovies = data;
    });
  }



}



interface Movie {
  movieId: number;
  movieTitle: string;
  movieYear: number;
  movieGenres: string;
  movieRating: number;
  movieNumberOfVoters: number;
  movieRank: number;
  movieAltRank: number;
  movieImdbId: number;
  moviePlot: string;
  moviePosterLink: string;
}