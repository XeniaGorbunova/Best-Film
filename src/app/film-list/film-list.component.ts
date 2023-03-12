import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Film } from 'src/types/film';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();
  allFilms: Film[] = [];
  film!: Film;
  bestFilm!: Film | null;
  constructor(private filmService: FilmsService) { }

  getAllFilms() {
    this.filmService.getFilms()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (res) => {
          this.allFilms = res;
          console.log(res);
        },
        (err) => console.log(err)
      );
  }

  removeBest() {
    this.filmService.removeBest();
    if (this.filmService.bestFilm !== undefined) this.bestFilm = this.filmService.bestFilm;
  }

  chooseBest(id: number) {
    this.filmService.chooseBest(id);
    if (this.filmService.bestFilm !== undefined) this.bestFilm = this.filmService.bestFilm;
  }

  ngOnInit() {
    this.getAllFilms();
    if (this.filmService.bestFilm !== undefined) this.bestFilm = this.filmService.bestFilm;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
