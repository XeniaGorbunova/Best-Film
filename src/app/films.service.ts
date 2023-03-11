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
      // this.bestFilm = this.getBestFilmFromLS();
      console.log(this.bestFilm);
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
    if (this.bestFilm !== null) window.localStorage.setItem('BEST_FILM', JSON.stringify(this.bestFilm));
  }

  filter(genre: number) {
    this.allFilms.filter((film) => film.genre.includes(genre));
  }

  getBestFilmFromLS() {
    // if (typeof window.localStorage.getItem('BEST_FILM') === 'string') return JSON.parse(window.localStorage.getItem('BEST_FILM'))
    // else return null;
  }
}
