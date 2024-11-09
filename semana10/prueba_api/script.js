async function fetchMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6486e1705amshc52bbfeb2814f45p1649d1jsncf534dc26a75',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
    try {
        const response = await fetch(url,options); // Reemplaza con la URL de la API IMDb Top 100 Movies
        const data = await response.json();
        displayMovies(data);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies");
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("col-md-3", "mb-4");

        movieCard.innerHTML = `
            <div class="card">
                <img src="${movie.image}" class="card-img-top movie-img" alt="${movie.title}" data-bs-toggle="modal" data-bs-target="#movieModal" data-id="${movie.rank}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p>${movie.description}</p>
                    <p>${movie.rank}</p>
                    </div>
            </div>
        `;
        moviesContainer.appendChild(movieCard);
    });
    // Add click event listeners for each movie image
document.querySelectorAll('.movie-img').forEach(img => {
    img.addEventListener('click', (e) => {
        const movieId = e.target.getAttribute('data-id');
        fetchMovieDetails(movieId);
    });
});
}




async function fetchMovieDetails(movieId) {
try {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/top${movieId}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6486e1705amshc52bbfeb2814f45p1649d1jsncf534dc26a75',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    const response = await fetch(url,options); // Reemplaza con la URL de detalles de película en la API
    const movie = await response.json();
    displayMovieDetails(movie);
} catch (error) {
    console.error("Error fetching movie details:", error);
}
}

function displayMovieDetails(movie) {
document.getElementById("movieModalLabel").textContent = movie.title;
document.getElementById("moviePoster").src = movie.image;
document.getElementById("movieDescription").textContent = movie.description || "No description available.";
document.getElementById("movieDirector").textContent = movie.director || "Unknown";
document.getElementById("movieRating").textContent = movie.rating || "N/A";
document.getElementById("movieReleaseDate").textContent = movie.year || "Unknown";
}


fetchMovies();