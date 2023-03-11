import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Film } from 'src/types/film';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {
  private readonly unsubscribe$: Subject<void> = new Subject();
  allFilms: Film[] = [];
  film!: Film;
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
  }

  chooseBest(id: number) {
    this.filmService.chooseBest(id);
  }

  ngOnInit() {
    this.getAllFilms();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
