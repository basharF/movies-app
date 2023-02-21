import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { getDatabase, ref, child, get } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: string;
  moviesRef: AngularFireList<any>;
  movieRef: AngularFireObject<any>;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl:string, private db: AngularFireDatabase) { this.baseUrl = baseUrl}

  // getMovieList(): Observable < any[] > {
  //   return this.http.get < any[] > ('https://localhost:7116/movies');
  // }

  getTopRatedMovies(): Observable<any[]>{
    return this.db.list('movies').valueChanges();
  }

  getAllMovies(): Observable<any[]>{
    return this.http.get < any[] > ('https://localhost:7116/movies');
  }

  getWatchedMoviesByUserId(id: number): Observable<any>{
    return this.http.get < any[] > ('https://localhost:7116/movies/' + id + '/watchedByUserId');
  }

  getSuggestedMoviesByUserId(id: number): Observable<any>{
    return this.http.get < any[] > ('https://localhost:7116/movies/' + id + '/suggestedByUserId');
  }

  getMovieById(id: number): Observable<any>{
    return this.http.get < any[] > ('https://localhost:7116/movies/' + id + '/byId');
  }

  getMoviesByText(text: string): Observable<any>{
    return this.http.get < any > ('https://localhost:7116/movies/' + text + '/byText');
  }

  getMovieDetails(id: number): Observable<any>{
    return this.http.get < any > ('https://www.omdbapi.com/?i=tt0'+id+'&apikey=18fca18');
  }

  getRecommendedMoviesByUserId(id: number): Observable<any>{
    return this.http.get < any > ('https://localhost:7116/movies/' + id + '/byUserId');
  }

}
