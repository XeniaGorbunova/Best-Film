import { Component, Input, OnInit } from '@angular/core';
import { genres } from 'src/assets/genre';
import { Film } from 'src/types/film';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  query!: string;
  title = 'bestFilm';
  bestFilm!: Film | null;
  selectOptions!: string[];
  constructor(private filmService: FilmsService) {
    this.selectOptions = ['все', ...genres];
    this.query = '';
  }

  ngOnInit() {
    if (this.filmService.bestFilm !== undefined) this.bestFilm = this.filmService.bestFilm;
  }
}
