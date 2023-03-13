import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/types/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  bestFilm?: Film | null;
  allFilms!: Film[];

  constructor(private http: HttpClient) {
    this.http.get<Film[]>('assets/data.json').subscribe((res: Film[]) => {
      this.allFilms = res;
      console.log('--- result :: ', this.allFilms);
    });
    this.bestFilm = this.getBestFilmFromLS();
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('assets/data.json');
  }

  removeBest() {
    this.bestFilm = null;
    window.localStorage.removeItem('BEST_FILM');
  }

  chooseBest(id: number) {
    this.bestFilm = this.allFilms.find((film) => film.id === id) || null;
    if (this.bestFilm !== null) window.localStorage.setItem('BEST_FILM', JSON.stringify(this.bestFilm));
  }

  toggleBestFilm(id: number) {
    if (this.bestFilm === null) this.chooseBest(id);
    else (this.bestFilm?.id === id) ? this.removeBest() : this.chooseBest(id);
  }

  getBestFilmFromLS() {
    const filmFromLS = window.localStorage.getItem('BEST_FILM');
    return (typeof filmFromLS === 'string') ? JSON.parse(filmFromLS) : null;
  }
}
