import React from 'react'
import { FiHeart } from 'react-icons/fi';
import { FiTrash2 } from "react-icons/fi";

interface MovieDetailProps {
    id: number;
    title: string;
    poster_path: string | null;
    overview: string;
    release_date: string;
    homepage: string | null;
    
  }
interface WatchListProps {
    watchList: MovieDetailProps[]
    isDropDownOpen: boolean;
    handleRemoveFromWatchList: (movieId: number) => void;
    toggleDropDown: () => void;
    handleWatchListClick: (movieId: number) => void;
    watchListCount: number;
}

const WatchList: React.FC<WatchListProps> = ({ 
    watchList, 
    handleRemoveFromWatchList, 
    toggleDropDown, 
    isDropDownOpen, 
    handleWatchListClick, 
    watchListCount }) => {
    
  return (
    <div>
        <FiHeart 
            className='h-6 w-6 text-gray-100 cursor-pointer' 
            onClick={toggleDropDown}
        />{watchListCount > 0 && (<span className='flex  bg-red-500 text-white 
        rounded-full text-xs px-1 py-0.5 fixed z-20 top-8 ml-1.5' 
        >{watchListCount}</span>)}
        {isDropDownOpen && (
            <div className='absolute right-0 mt-5 w-96 bg-white rounded-lg shadow-lg z-20'>
                <div className='p-4'>
                    <h3 className='text-lg font-bold mb-3'>Watchlist</h3>
                        {watchList.length === 0 ? (
                        <p className='text-gray-500'>No movie in the watchlist.</p>) : (
                            <ul className='space-y-3 max-h-60 overflow-y-auto'>
                                {watchList.map((movie) => (
                                    <li 
                                        key={(movie.id)} 
                                        className='flex items-center justify-between p-2
                                         bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
                                        <div className='flex items-center'>
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                                alt={movie.title} 
                                                className='w-12 h16 rounded-lg object-cover mr-3' />
                                        </div>
                                        <span 
                                            className='text-base text-balance text-center font-semibold truncate cursor-pointer'
                                            onClick={() => handleWatchListClick(movie.id)}
                                            >{movie.title}
                                        </span>
                                        <button  
                                            onClick={() => handleRemoveFromWatchList(movie.id)}
                                            ><FiTrash2 className='h-5 w-5 m-2'/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                    )}
                </div>
            </div>
        )}
    </div>
  )
};

export default WatchList