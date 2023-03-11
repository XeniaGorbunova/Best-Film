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
  @Output() chooseBest = new EventEmitter<Film>();
  @Output() removeBest = new EventEmitter<Film>();
  constructor(private filmService: FilmsService) {
    this.genres = genres;
  }
}
