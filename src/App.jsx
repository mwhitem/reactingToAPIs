import React, { useState, useEffect } from "react";

const App = () => {
  const [clickFilm, setClickFilm] = useState(false);
  const [films, setFilms] = useState([]);
  const [clickPeople, setClickPeople] = useState(false);
  const [people, setPeople] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
  }, []);

  if (clickFilm) {
    return (
      <>
        <h1 className="d-flex justify-content-center m-4">
          Studio Ghibli Films
        </h1>
        <div className="d-flex justify-content-center m-2">
          <button className="btn btn-primary" onClick={refreshPage}>
            Go Back
          </button>
        </div>
        <div className="container-film d-flex flex-wrap justify-content-center">
          {films.map((films) => (
            <div
              className="card m-4 d-flex flex-column col-4 flex-row align-items-center"
              key={`item-${films.id}`}
            >
              <div className="card-title m-2">{films.title}</div>
              <div className="card-title m-2">{films.original_title}</div>
              <div className="card-subtitle text-muted m-2">
                {films.director}
              </div>
              <div className="card-text m-2">{films.release_date}</div>
              <div className="card-text m-2">{films.description}</div>
              <a href={films.url} target="blank" className="text-decoration-none">
                API Resource Link
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
  if (clickPeople) {
    return (
      <>
        <h1 className="d-flex justify-content-center m-4">
          Studio Ghibli People
        </h1>
        <div className="d-flex justify-content-center m-2">
          <button className="btn btn-primary" onClick={refreshPage}>
            Go Back
          </button>
        </div>

        <div className="container-people d-flex flex-wrap justify-content-center">
          {people.map((people) => (
            <div
              className="card m-4 d-flex flex-column col-4 align-items-center"
              key={`item-${people.id}`}
            >
              <div className="card-title m-2 fw-bold">Name: {people.name}</div>
              <div className="card-text m-2">Gender: {people.gender}</div>
              <div className="card-text m-2">Age: {people.age}</div>
              <a href={films.url} target="blank" className="text-decoration-none">
                API Resource Link
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="d-flex justify-content-center m-2">Studio Ghibli</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <button
          className="btn btn-primary m-2"
          onClick={() => setClickFilm(true)}
        >
          Load Films
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => setClickPeople(true)}
        >
          Load People
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center m-4">
        <img
          src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg"
          alt=""
          width="600"
          height="500"
        />
      </div>
    </>
  );
};

export default App;
