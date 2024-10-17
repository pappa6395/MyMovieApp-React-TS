import React from 'react'
import TypeCard from './Card/TypeCard'
import GenreMap from './utils/GenreMap';

interface MovieProps {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[];
    release_date: string;
    overview: string;
}

interface CardProps {
    movies: MovieProps[];
    setSelectedMovieId: (id: number | null) => void;
}

const Card: React.FC<CardProps> = ({ movies, setSelectedMovieId }) => {

  return (
    <div className="flex flex-wrap flex-grow mx-auto ml-7 mt-[3rem] min-h-screen w-auto p-4">
       <div className='flex flex-wrap gap-5 cursor-pointer'>
        {movies.map((movie, index) => {
            const genres = movie.genre_ids.map((id: number) => GenreMap[id]);
            const genreString = genres.length === 1 ? genres[0] : genres.join(', ');
            
            return (
              <div key={`${movie.id}-${index}`} onClick={() => setSelectedMovieId(movie.id)}>
                <TypeCard 
                key={`${movie.id}-${index}`} 
                title={movie.title || 'Unknown Title'}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                score={movie.vote_average}
                movieType={genreString || 'Unknown Genre'}
                releaseDate={movie.release_date || 'Unknown Release Date'}/>
              </div>
            );
        })}
       </div>
    </div>
  )
}

export default Card