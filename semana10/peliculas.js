const credenciales= {
    'x-rapidapi-key': '6486e1705amshc52bbfeb2814f45p1649d1jsncf534dc26a75',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
};

async function fetchMovies(){
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: credenciales
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayMovies(result);
    } catch (error) {
        console.error(error);
    }
}

function displayMovies(movies){
    const moviesContainer= document.getElementById("movies");
    let html="";
    movies.forEach(movie => {
         const tarjeta=`
         <div class="col-md-3">
            <div class="card">
                <img src="${movie.image}" class="card-img-top movie-poster" data-id="${movie.id}" data-bs-toggle="modal" data-bs-target="#movieModal">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p>${movie.description}</p>
                </div>
            </div>
        </div> 
        `;
        html+=tarjeta;
    });
    moviesContainer.innerHTML=html;
    document.querySelectorAll(".movie-poster").forEach(img=>{
        img.addEventListener('click', (e)=>{
            const movieId=e.target.getAttribute('data-id');
            viewMovieDetails(movieId);

        })
    });
   
}

async function viewMovieDetails(movieId) {
    const url =`https://imdb-top-100-movies.p.rapidapi.com/${movieId}`;
    const options = {
        method: 'GET',
        headers: credenciales
    };
    try {
        const response = await fetch(url, options);
        const movie = await response.json();
        document.getElementById('movieModalLabel').textContent=movie.title;
        document.getElementById('moviePoster').src=movie.image;
        document.getElementById('movieDirector').textContent=movie.director;
        document.getElementById('movieRating').textContent=movie.rating;
        document.getElementById('movieYear').textContent=movie.year;
    } catch (error) {
        console.error(error);
    }
}

fetchMovies();