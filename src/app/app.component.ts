import { Component, Input } from '@angular/core';
import { Film } from 'src/types/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bestFilm';
  @Input() bestFilm!: Film;
}
