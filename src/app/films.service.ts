import { Injectable } from '@angular/core';
import { Film } from 'src/types/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { this.bestFilm = null }
  bestFilm: Film | null;
  allFilms: Film[] = [
    {
      id: 20,
      name: "Король говорит!",
      year: 2010,
      description: "Герцог готовится вступить в должность британского короля Георга VI, отца королевы Елизаветы II. После того, как его брат отрекается от престола, мужчина неохотно соглашается на трон. Измученный страшным нервным заиканием и сомнениями в своих способностях руководить страной, Георг обращается за помощью к неортодоксальному логопеду по имени Лайонел Лог.",
      genre: [
        1,
        2,
        3
      ]
    },
    {
      id: 21,
      name: "Холодное сердце",
      year: 2013,
      description: "Когда сбывается древнее предсказание, и королевство погружается в объятия вечной зимы, трое бесстрашных героев - принцесса Анна, отважный Кристофф и его верный олень Свен - отправляются в горы, чтобы найти сестру Анны, Эльзу, которая может снять со страны леденящее заклятие. По пути их ждет множество увлекательных сюрпризов и захватывающих приключений: встреча с мистическими троллями, знакомство с очаровательным снеговиком по имени Олаф, горные вершины покруче Эвереста и магия в каждой снежинке. Анне и Кристоффу предстоит сплотиться и противостоять могучей стихии, чтобы спасти королевство и тех, кто им дорог.",
      genre: [
        7,
        8,
        4,
        5
      ]
    }
  ];

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
