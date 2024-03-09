import React from 'react';
import Card from '../component/card';

const moviesData = [
  {
    title: 'Taxi Driver',
    subtitle: '1976 ‧ Crime/Noir ‧ 1h 53m',
    description: 'Taxi Driver is a 1976 American neo-noir psychological thriller film directed by Martin Scorsese, written by Paul Schrader, and starring Robert De Niro...',
    image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3836_p_v8_aq.jpg',
    rating: "8.2/10 by IMDB"
  },
  {
    title: 'Pulp Fiction',
    subtitle: ' 1994 ‧ Crime/Thriller ‧ 2h 34m',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    image: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    rating: "8.9/10 by IMDB"
  },
  {
    title: 'Taste of Cherry',
    subtitle: '1997 ‧ Documentary/Drama ‧ 1h 35m',
    description: "Taste of Cherry is a 1997 Iranian minimalist drama film written, produced, edited and directed by Abbas Kiarostami",
    image: 'https://humanities.byu.edu/wp-content/uploads/Taste-of-Cherry.jpg',
    rating: "7.7/10 by IMDB"
  },
  {
    title: 'Joyland',
    subtitle: '2022 ‧ Romance/Drama ‧ 2h 7m',
    description: "It's a film about the healing powers of female friendship and solidarity. It's a film about the costs of ignoring our own dreams to conform to society around us ...",
    image: 'https://m.media-amazon.com/images/S/pv-target-images/a23b94d70568004979e9cfeb9bfbb0880c3612deac300947409d3236cc686288.jpg',
    rating: "7.6/10 by IMDB"
  },
];

function MovieScreen() {
  return (
    <div className="Movies">
      <h1>Movie List</h1>
      <div className="movie-list">
        {moviesData.map((movie, index) => (
          <Card key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieScreen;