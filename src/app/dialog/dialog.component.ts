import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FilmCardComponent } from '../film-card/film-card.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<FilmCardComponent>) { }
}
