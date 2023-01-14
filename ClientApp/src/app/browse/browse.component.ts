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
  genre: string;

  constructor(private movieSevice: MovieService, private route: ActivatedRoute) { 
    this.movieSevice.getTopRatedMovies().subscribe(data => {
      this.movies = data;
      
      this.route.queryParams.subscribe(param => {
        this.genre = param['genre'];
        this.applyFilter();
      });
    });
  }

  ngOnInit() {

  }

  applyFilter(){
    this.filterdMovies = (this.genre)? this.movies.filter(m => m.movieGenres.includes(this.genre)) :
          this.movies;
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
  movieGenres: string;
  movieRating: number;
  movieNumberOfVoters: number;
}