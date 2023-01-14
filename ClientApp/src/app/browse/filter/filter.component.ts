import { GenreService } from '../../genre.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public genres$: Observable<Genre[]>;


  @Input('genre') genre: string;

  constructor(private genreService: GenreService) {
   }
  
  ngOnInit() {
    this.genres$ = this.genreService.getGenreList();
  }
}


interface Genre {
  genreName: string;
}

