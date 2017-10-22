import React, { Component } from 'react';
import MovieCard from './../CardCatalog/MovieCard/MovieCard';

const Favorites = (props) => {
  const { favorites , addFavorite, login, deleteFavorite } = props;
  const mappedCards = favorites.map( (movie, index) => {
    const { title, release_date, poster_path, vote_average, overview, movie_id } = movie;
    return ( <MovieCard
      key={index}
      title={title}
      releaseDate={release_date}
      image={poster_path}
      addFavorite={addFavorite}
      deleteFavorite={deleteFavorite}
      voteAverage={vote_average}
      overview={overview}
      movieID={movie_id}
      login={login}
      movie={movie}
      favorites={favorites}
             />)

  })
      return (
        <div className="card-catalog">
          {mappedCards}
        </div>
  )
}


export default Favorites;
