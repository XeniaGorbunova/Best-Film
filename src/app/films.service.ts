import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/types/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  bestFilm: Film | null;
  allFilms!: Film[];

  constructor(private http: HttpClient) {
    this.bestFilm = null;
    this.http.get<Film[]>('assets/data.json').subscribe((res: Film[]) => {
      this.allFilms = res;
      console.log('--- result :: ', this.allFilms);
    });
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('assets/data.json');
  }

  search(query: string) {
    this.allFilms.filter((film) => film.name.toLowerCase().includes(query.toLowerCase()));
  }

  removeBest() {
    this.bestFilm = null;
    window.localStorage.removeItem('BEST_FILM');
  }

  chooseBest(id: number) {
    this.bestFilm = this.allFilms.find((film) => film.id === id) || null;
    if (this.bestFilm !== null) window.localStorage.setItem('BEST_FILM', this.bestFilm.name);
  }

  filter(genre: number) {
    this.allFilms.filter((film) => film.genre.includes(genre));
  }

  getBestFilmFromLS() {
    this.bestFilm = this.allFilms.find((film) => film.name === window.localStorage.getItem('BEST_FILM')) || null;
  }
}
