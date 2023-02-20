import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  public movies$: Observable<Movie[]>;
  public movies: Movie[] = [];
  public filterdMovies: Movie[] = [];
  public filterdMoviesPrimaryRank: Movie[] = [];
  public filterdMoviesAltRank: Movie[] = [];
  genre: string;

  constructor(private movieSevice: MovieService, private route: ActivatedRoute) { 
    this.movieSevice.getAllMovies().subscribe(data => {
      this.movies = data;
      //  console.log(data);
      
      this.route.queryParams.subscribe(param => {
        this.genre = param['genre'];
        this.applyFilter();
      });
    });
  }

  ngOnInit() {

  }

  applyFilter(){
    this.filterdMoviesPrimaryRank = this.movies.filter(m => m.movieRank !== null).sort((m1,m2) => m1.movieRank - m2.movieRank);
    this.filterdMoviesAltRank = this.movies.filter(m => m.movieAltRank !== null).sort((m1,m2) => m1.movieAltRank - m2.movieAltRank);
    this.filterdMovies = this.filterdMoviesPrimaryRank.concat(this.filterdMoviesAltRank);
    this.filterdMovies = (this.genre)? this.filterdMovies.filter(m => m.movieGenres.includes(this.genre)).slice(0,50) :this.filterdMovies.slice(0,50);
  }

  // refreshStudentList() {
  //   this.movieSevice.getMovieList().subscribe(data =>{
  //     this.movies = data;
  //   });
  // }

  // async refreshMoviesList() {
  //   this.movies$ = await this.movieSevice.getMovieList();
  // }

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
}