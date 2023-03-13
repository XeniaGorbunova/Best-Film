import { Component, Input, OnInit } from '@angular/core';
import { genres } from 'src/assets/genre';
import { Film } from 'src/types/film';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bestFilm';
  constructor() { }
}
