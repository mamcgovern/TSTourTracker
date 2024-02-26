// Author: Maddelynne McGovern
// ISU Netid: mrm4@iastate.edu
// Date: February 21, 2024

function getInputValue() {
    let movieName = document.forms["my_form"]["inputMovieName"];
    let inputMovieName = movieName.value;
    fetch("./mrm4_Activity08_MoviesFromJSON.json")
        .then(response => response.json())
        .then(myMovies => loadMovies(myMovies));

    function loadMovies(myMovies) {
        var mainContainer = document.getElementById("goodmovies");
        for (var i = 0; i < myMovies.movies.length; i++) {
            if (myMovies.movies[i].title === inputMovieName) {
                console.log(myMovies.movies[i]);
                let div = document.createElement("div");
                div.innerHTML = `<br>
                <h2> ${myMovies.movies[i].title} </h2>
                ${myMovies.movies[i].year} <br>
                <img src=${myMovies.movies[i].url} style="width: 200px;" alt="movie image" >`;
                mainContainer.appendChild(div);
            }
        }
    }
}