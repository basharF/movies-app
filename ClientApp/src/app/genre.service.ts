import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  baseUrl: string;

  constructor(@Inject('BASE_URL') baseUrl:string, private db: AngularFireDatabase) { this.baseUrl = baseUrl}

  getGenreList(): Observable<any[]>{
    return this.db.list('genres').valueChanges();
  }
}
