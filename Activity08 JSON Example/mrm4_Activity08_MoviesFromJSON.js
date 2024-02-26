// Author: Maddelynne McGovern
// ISU Netid: mrm4
// Date: February 21, 2024

fetch("./mrm4_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var mainContainer = document.getElementById("goodmovies");
    for(let movie of myMovies.movies) {
        console.log(movie);
        let div = document.createElement("div");
        div.innerHTML = `<br>
        <h2> ${movie.title} </h2>
        ${movie.year} <br>
        <img src=${movie.url} style="width: 200px;" alt="movie image" >`;
        mainContainer.appendChild(div);
    }
}