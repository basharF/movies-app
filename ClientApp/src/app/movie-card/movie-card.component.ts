import { MovieService } from './../movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') movie: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieDetails(this.movie.movieImdbId).subscribe(omdbMovie => {
      this.movie.moviePlot = omdbMovie.Plot;
      this.movie.moviePosterLink = omdbMovie.Poster;
      console.log(omdbMovie);
    })
  }

}


interface Movie {
  movieId: number;
  movieTitle: string;
  movieGenres: string;
  movieImdbId: number;
  moviePlot: string;
  moviePosterLink: string;
  // movieRating: number;
  // movieNumberOfVoters: number;
}