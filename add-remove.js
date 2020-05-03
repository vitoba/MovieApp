const startAddMovie = document.querySelector('.main-nav__add');
const movieModel    = document.querySelector('.model');
const backdrop      = document.querySelector('.backdrop');
const AddMovie      = document.querySelector('.add_passive');
const CancelMovie   = document.querySelector('.cancel_passive');
const getUserInput  = document.querySelectorAll('input');
const addToMovieList  = document.querySelector('.movie-detail .movie-detail_list');
let removeMovie = "";


const movies = [];

const hideMovieModel = () => {
    movieModel.classList.toggle('visible'); 
    backdrop.classList.toggle('visible');
}

const showMovieModel = () => {
    hideMovieModel();
};

const resetModel = ()=> {
    for(usrInput of getUserInput){
        usrInput.value = "";
           
    }
    
    
}

const validateUserInput = () => {
    const movieTitle  = getUserInput[0].value.trim(); 
    const imageUrl    = getUserInput[1].value.trim(); 
    const movieRating = getUserInput[2].value.trim(); 

    if(movieTitle  === '' || 
       imageUrl    === '' || 
       movieRating === '' ||
       +movieRating < 1   || 
       +movieRating > 5){
           alert("Enter valid input (Range should be from 0 to 5)");
           return;
    } 

    const movieInfo = {
        title:movieTitle,
        imageAddr:imageUrl,
        movRating:movieRating
      };
  
      movies.push(movieInfo);
      console.log(movies);
}


const rederDataOnScreen = () =>{
    if(movies.length === 0){
        alert('Please add movies');
        return;
    }
    
    //const movie = movies[movies.length - 1];
        addToMovieList.innerHTML = "";
        for(movie of movies){
            const listItem = document.createElement('li');
            listItem.className = "movie_image";
            listItem.innerHTML = `
            <p class="remove-Movie">Remove Move</p>
            <img src="${movie.imageAddr}" alt="${movie.title}">
            <h2 class="movie_title">${movie.title}</h2>
            <h2 class="movie_rating">Rating: ${movie.movRating}</h2>
            `;
            addToMovieList.appendChild(listItem);
        }
        
        
    /* const header1  = document.createElement('h2');
    const header2  = document.createElement('h2');
    listItem.className = "movie_image";
    header1.className  = "movie_title";
    header2.className  = "movie_rating";
    console.log(listItem);
    console.log(header1);
    console.log(header2); */
}

const addMovieModel = () => {
    validateUserInput();
    rederDataOnScreen();
    resetModel();
    hideMovieModel();
      
}

const deleteMovie = () => {
   
}

startAddMovie.addEventListener('click',showMovieModel);
CancelMovie.addEventListener('click',hideMovieModel);
AddMovie.addEventListener('click',addMovieModel);
