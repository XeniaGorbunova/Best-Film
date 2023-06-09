import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  openDialog(film: Film, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        id: film.id,
        name: film.name,
        description: film.description,
        year: film.year,
        genre: film.genre,
        isFavorite: film.id === this.bestFilm?.id,
      },
      width: '756px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) this.toggleBestFilm.emit(film.id);
    });
  }
}
