const movieSection = document.getElementById("movieSection");
const sortByDateBtn = document.getElementById("sortDate");
const sortByRateBtn = document.getElementById("sortRate");
let pageNumber = 1;
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const pageMidText = document.getElementById("buttonMidText");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInpt");
let allButton = document.getElementById("allButton");
let favouriteBtn = document.getElementById("favouriteButton");

let favouriteData = [];
if (localStorage.getItem("favourite") == null) {
  localStorage.setItem("favourite", JSON.stringify([]));
} else {
  favouriteData = JSON.parse(localStorage.getItem("favourite"));
}

pageMidText.textContent = pageNumber + " of 100";
if (pageNumber === 1) {
  previousBtn.disabled = true;
} else {
  previousBtn.disabled = false;
}

let movies = [];
async function FetchAPI(page) {
  let d = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`
  );
  let data = await d.json();
  movies = data.results;
  console.log(movies);
  displayMovies(movies);
}
FetchAPI(pageNumber);

function displayMovies(data) {
  movieSection.innerHTML = "";
  data.forEach((val) => {
    let arr = favouriteData.filter((x) => x.title === val.title);
    //console.log(arr.length);
    movieSection.innerHTML += `<div class="movieCrd" id="1">
        <div class="movieImage"><img src="https://image.tmdb.org/t/p/original/${
          val.poster_path
        }" /></div>
        <div class="movieName">${val.title}</div>
        <div class="rating">
          <div>
            <div class="vote">vote: <span class="bold">${
              val.vote_count
            }</span></div>
            <div class="vote">rating: <span class="bold">${
              val.vote_average
            }</span></div>
          </div>
          <div>
            <i class="fa ${
              arr.length === 0 ? "fa-heart-o" : "fa-solid fa-heart"
            } heart" id='{"title":"${val.title}","vote_count":"${
      val.vote_count
    }","vote_average":"${val.vote_average}","poster_path":"${
      val.poster_path
    }","release_date":"${val.release_date}"}'></i>
          </div>
        </div>
      </div>`;
  });
}

sortByDateBtn.addEventListener("click", () => {
  if (sortByDateBtn.textContent === "Sort by date (oldest to latest)") {
    sortByDateBtn.textContent = "Sort by date (latest to oldest)";
    movies.sort((a, b) => {
      return (
        parseInt(a.release_date.slice(0, 4)) -
        parseInt(b.release_date.slice(0, 4))
      );
    });
    displayMovies(movies);
  } else {
    sortByDateBtn.textContent = "Sort by date (oldest to latest)";
    movies.sort((a, b) => {
      return (
        parseInt(b.release_date.slice(0, 4)) -
        parseInt(a.release_date.slice(0, 4))
      );
    });
    displayMovies(movies);
  }
});

sortByRateBtn.addEventListener("click", () => {
  if (sortByRateBtn.textContent === "Sort by rating (least to most)") {
    sortByRateBtn.textContent = "Sort by rating (most to least)";
    movies.sort((a, b) => {
      return parseFloat(a.vote_average) - parseFloat(b.vote_average);
    });
    displayMovies(movies);
  } else {
    sortByRateBtn.textContent = "Sort by rating (least to most)";
    movies.sort((a, b) => {
      return parseFloat(b.vote_average) - parseFloat(a.vote_average);
    });
    displayMovies(movies);
  }
});

previousBtn.addEventListener("click", () => {
  if (pageNumber == 1) {
    previousBtn.disabled = true;
  } else {
    pageNumber--;
    FetchAPI(pageNumber);
  }
  pageMidText.textContent = pageNumber + " of 100";
});

nextBtn.addEventListener("click", () => {
  if (pageNumber == 100) {
    previousBtn.disabled = true;
  } else {
    pageNumber++;
    FetchAPI(pageNumber);
  }
  if (pageNumber > 1) {
    previousBtn.disabled = false;
  }
  pageMidText.textContent = pageNumber + " of 100";
});

searchBtn.addEventListener("click", () => {
  let val = searchInput.value.toLowerCase();
  //alert(val);
  if (val.length === 0) {
    setTimeout(() => {
      FetchAPI(pageNumber);
    }, 1000);
  } else {
    async function fetchmovies(val) {
      let d = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=f531333d637d0c44abc85b3e74db2186&language=en-US`
      );
      let data = await d.json();
      movies = data.results;
      //console.log(movies);
      //displayMovies(movies);
      if (movies.length > 0) {
        displayMovies(movies);
      } else {
        movieSection.textContent = "sorry No movies found !!!!!!";

        setTimeout(() => {
          FetchAPI(pageNumber);
        }, 2000);
      }
    }
    fetchmovies(val);
  }
});

movieSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("heart")) {
    favouriteData = JSON.parse(localStorage.getItem("favourite"));
    if (e.target.classList.contains("fa-heart-o")) {
      e.target.classList.remove("fa-heart-o");
      e.target.classList.add("fa-solid");
      e.target.classList.add("fa-heart");
      favouriteData.push(JSON.parse(e.target.id));
      //alert(e.target.id);
      //console.log(favouriteData);
    } else {
      e.target.classList.remove("fa-solid");
      e.target.classList.remove("fa-heart");
      e.target.classList.add("fa-heart-o");
      //console.log(JSON.parse(e.target.id));
      favouriteData = favouriteData.filter((val) => {
        return val.title !== JSON.parse(e.target.id).title;
      });
    }
    let data = [...favouriteData];
    localStorage.setItem("favourite", JSON.stringify(data));
    fun();
  }
});
function fun() {
  console.log(JSON.parse(localStorage.getItem("favourite")));
}

favouriteBtn.addEventListener("click", () => {
  allButton.classList.remove("active-tab");
  favouriteBtn.classList.add("active-tab");
  movies = [...favouriteData];
  displayMovies(movies);
});
allButton.addEventListener("click", () => {
  favouriteBtn.classList.remove("active-tab");
  allButton.classList.add("active-tab");
  FetchAPI(pageNumber);
});