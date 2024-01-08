let numberOfFilms;

numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");


const personalMovieDB = {
	count : numberOfFilms,
	movies:{},
	actors:{},
	genres:[],
	privat:false
}; 


for(let i = 0; i < 2; i++){
	let	lastWatchedFilm = prompt("Последний просмотренный фильм", "");
	let raitingWatchedFilm = prompt("Оценка фильма", "");

	if(lastWatchedFilm != null && raitingWatchedFilm != null 
		&& lastWatchedFilm != "" && raitingWatchedFilm != "" && lastWatchedFilm.length < 50){
			personalMovieDB.movies[lastWatchedFilm] = raitingWatchedFilm;
			console.log("Done!");
		}else {
			i--;
			console.log("It's not done!");
		}
}
console.log(personalMovieDB);

alert("Исходя из вышеперечисленного определим кто ты по жизнги...");
let whoAreYouInLife = personalMovieDB.count;

if(whoAreYouInLife > 1 && whoAreYouInLife < 10){
	alert("Щегол");
}else if(whoAreYouInLife > 10 && whoAreYouInLife < 30){
	alert("Юный петушара");
}else if (whoAreYouInLife > 30){
	alert("Петушара");
}else {
	alert("Лох не из нашей песочницы");
}
