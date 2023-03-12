import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { genres } from 'src/assets/genre';
import { Film } from 'src/types/film';
import { DialogComponent } from '../dialog/dialog.component';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {
  genres: string[];
  @Input() film!: Film;
  @Input() bestFilm!: Film | null;
  @Output() toggleBestFilm = new EventEmitter<number>();
  constructor(private filmService: FilmsService, public dialog: MatDialog) {
    this.genres = genres;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
