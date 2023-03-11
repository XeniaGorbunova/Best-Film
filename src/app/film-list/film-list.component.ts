import { Component } from '@angular/core';
import { Film } from 'src/types/film';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {
  allFilms: Film[] = [];
  film: Film;
  constructor(private filmService: FilmsService) { }

  remove(film: Film) {
    this.filmService.remove(film);
  }

  clearAll() {
    this.filmService.clearAll();
  };

  addFilm(description: string) {
    this.filmService.addFilm(description);
  };

  ngOnInit() {
    this.allFilms = this.filmService.allFilms;
  }
}
