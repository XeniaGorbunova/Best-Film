import { Component, EventEmitter, Input, Output } from '@angular/core';
import { genres } from 'src/assets/genre';
import { Film } from 'src/types/film';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {
  genres: string[];
  @Input() film!: Film;
  @Input() bestFilm?: Film;
  @Output() chooseBest = new EventEmitter<number>();
  @Output() removeBest = new EventEmitter();
  constructor(private filmService: FilmsService) {
    this.genres = genres;
  }
}
