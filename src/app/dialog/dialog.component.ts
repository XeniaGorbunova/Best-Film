import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { genres } from 'src/assets/genre';
import { FilmCardComponent } from '../film-card/film-card.component';

export interface DialogData {
  id: number,
  name: string;
  description: string;
  year: number;
  genre: number[];
  isFavorite: boolean;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  genres: string[];
  constructor(public dialogRef: MatDialogRef<FilmCardComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
    this.genres = genres;
  }
}
