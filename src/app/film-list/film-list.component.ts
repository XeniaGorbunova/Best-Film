import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { genres } from 'src/assets/genre';
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
  // query!: string;
  selectOptions!: string[];
  form: FormGroup;
  constructor(private filmService: FilmsService, private fb: FormBuilder) {
    this.selectOptions = ['все', ...genres];
    // this.query = '';
    this.form = this.fb.group({
      query: [''],
      genre: [this.selectOptions[0]],
    });
  }

  getAllFilms() {
    this.filmService.getFilms()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (res) => {
          if (this.form.value.genre !== 'все') {
            const genreIndex = genres.indexOf(this.form.value.genre) + 1;
            this.allFilms = res.filter((film) => film.genre.includes(genreIndex));
          }
          else this.allFilms = res;
          console.log(res);
        },
        (err) => console.log(err)
      );
  }

  toggleBestFilm(id: number) {
    this.filmService.toggleBestFilm(id);
    if (this.filmService.bestFilm !== undefined) this.bestFilm = this.filmService.bestFilm;
  }

  selectFilms() {
    console.log(this.form);
    const genreIndex = genres.indexOf(this.form.value.genre) + 1;
    // this.allFilms = this.allFilms.filter((film) => film.name.toLowerCase().includes(this.form.value.query.toLowerCase()));
    // this.allFilms = this.allFilms.filter((film) => film.genre.includes(genreIndex));
    console.log(this.allFilms);
    // this.filmService.search(this.form.value.query);
    // this.filmService.filter(this.form.value.genre);
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
