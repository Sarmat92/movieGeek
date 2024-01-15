let numberOfFilms;

numberOfFilms;

function start(){
	numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

	while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
	}
}

start();

const personalMovieDB = {
	count : numberOfFilms,
	movies:{},
	actors:{},
	genres:[],
	privat:false
}; 



function rememberMyFilms(){
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
}

//rememberMyFilms();



function showPersonalLevel(){
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
}

//showPersonalLevel();

function writeYourFavoriteGanres(){
	
	for(let i = 0; i < 3; i++){
		let favoriteGanre = prompt("Your favoritr genre of film?", "");

		if(favoriteGanre != null && favoriteGanre != ""){
			personalMovieDB.genres[i] = favoriteGanre;
		}else{
			i--;
		}
	}
}

//writeYourFavoriteGanres();

function showMyDB(){
	if(personalMovieDB.privat != true){
		console.log(personalMovieDB);
	}
}

showMyDB();
