import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: Movie[]= [];
  public filterdMovies: Movie[]= [];
  public filterdMovieCards: Movie[]= [];
  constructor(private movieSevice: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieSevice.getAllMovies().subscribe(data => {
      this.movies = data;
    });
  }

  applyFilter(searchText: string){
    this.filterdMovies = (searchText !== "")? this.movies.filter(m => m.movieTitle.toLowerCase().includes(searchText.toLowerCase())).slice(0, 10) :[];
  }

  focusout(){
    this.filterdMovies = [];
  }

  getMovieById(movieId: number){
    this.filterdMovies =[];
    this.filterdMovieCards =[];
    this.movieSevice.getMovieById(movieId).subscribe(movie => {
      this.filterdMovieCards.push(movie[0]);
    });
  }

  getMoviesByText(text: string){
    this.filterdMovies =[];
    this.filterdMovieCards =[];
    this.movieSevice.getMoviesByText(text).subscribe(movies => {
      this.filterdMovieCards = movies;
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