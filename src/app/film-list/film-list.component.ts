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
  film!: Film;
  constructor(private filmService: FilmsService) { }

  removeBest() {
    this.filmService.removeBest();
  }

  chooseBest(id: number) {
    this.filmService.chooseBest(id);
  }

  ngOnInit() {
    this.allFilms = this.filmService.allFilms;
  }
}
