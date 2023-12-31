let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
	count : numberOfFilms,
	movies:{},
	actors:{},
	genres:[],
	privat:false
}; 

let lastWatchedFilm= prompt("Последний просмотренный фильм", ""),
	raitingWatchedFilm = prompt("Оценка фильма", "");

personalMovieDB.movies[lastWatchedFilm] = raitingWatchedFilm;

console.log(personalMovieDB);