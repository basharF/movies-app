import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  public movies: Movie[]= [];
  constructor(private movieSevice: MovieService) { }

  ngOnInit(): void {
    // this.movieSevice.getRecommendedMoviesByUserId(114438).subscribe(data => {
    //   this.movies = data;
    // });
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