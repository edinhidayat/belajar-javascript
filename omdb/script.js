let inputSearch = document.querySelector(".search-input");
let btnSearch = document.querySelector(".search-button");

$(btnSearch).on("click", function () {
  if ($(inputSearch).val() == "") {
    $(".list-movies").html("");
  } else {
    $.ajax({
      url: "http://www.omdbapi.com/?apikey=386856b4&s=" + $(inputSearch).val(),
      success: (response) => {
        const movies = response.Search;
        let listMovies = "";
        movies.forEach((m) => {
          listMovies += daftarMovies(m);
        });
        $(".list-movies").html(listMovies);

        $(".detail-button").on("click", function () {
          $.ajax({
            url:
              "http://www.omdbapi.com/?apikey=386856b4&i=" +
              $(this).data("imdbid"),
            success: (m) => {
              const movieDetail = showMovieDetail(m);
              $(".modal-body").html(movieDetail);
            },
            error: (e) => console.log(e.responseText),
          });
        });
      },
      error: (e) => console.log(e.responseText),
    });
  }
});

function daftarMovies(m) {
  return `<div class="col-md-4 mb-4">
            <div class="card h-100 border-warning kotak-card">
                <img src="${m.Poster}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                    <a href="" class="btn btn-primary stretched-link detail-button" data-bs-toggle="modal"
                    data-bs-target="#detailMovie" data-imdbid="${m.imdbID}">Details</a>
                </div>
            </div>
        </div>`;
}

function showMovieDetail(m) {
  return `<div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" alt="Gambar Poster" />
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h5>${m.Title} - (${m.Year})</h5></li>
                        <li class="list-group-item"><strong>Genre : </strong> ${m.Genre}</li>
                        <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                        <li class="list-group-item"><strong>Plot : </strong><br />${m.Plot}</li>
                    </ul>
                </div>
            </div>`;
}
