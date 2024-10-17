import React, { useEffect, useState } from 'react'
import { fetchMovieDetails } from './utils/Api';
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

interface ModalProps {
  movieId: number | null;
  handleCloseModal: () => void;
  handleAddToWatchList: (movie: MovieDetailProps) => void;
  isMovieInWatchList: (id: number) => boolean;
}

interface MovieDetailProps {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  homepage: string | null;
 
}

const Modal: React.FC<ModalProps> = ({ movieId, handleCloseModal, handleAddToWatchList, isMovieInWatchList }) => {

  const [movieDetail, setMovieDetail] = useState<MovieDetailProps | null>(null);
  const [isInWatchList, setIsInWatchList] = useState(false);

  useEffect(() => {
    if (movieId) {
      const fetchModalDetail = async () => {
        const modalDetail = await fetchMovieDetails(movieId);
        setMovieDetail(modalDetail)

        if (modalDetail) {
          setIsInWatchList(isMovieInWatchList(modalDetail.id))
        }
      };
      
      fetchModalDetail();
    }
  },[movieId, isMovieInWatchList])

  const handleHeartClick = () => {
    if (movieDetail) {
      handleAddToWatchList(movieDetail);
      setIsInWatchList(!isInWatchList);
    }
  }

  if (!movieDetail) {return null};

  return (

    <div 
        className="modal fixed inset-0 bg-black bg-opacity-50
          flex items-center justify-center z-50 h-full"
        onClick={handleCloseModal}>
      <div 
          className="bg-gray-100 rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative"
          onClick={(e) => e.stopPropagation()}>
        <button onClick={handleCloseModal} className="absolute top-4 right-4"><IoMdClose /></button>
        <h2 className="text-2xl font-bold mb-4 -mt-3">{movieDetail.title}</h2>
        <img 
            src={movieDetail.poster_path 
              ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}` 
              : '/path-to-placeholder-image.jpg'} 
            alt={movieDetail.title} className="mb-4 -mt-2 mx-auto self w-[400px]" />
        <p 
            className="mb-4 max-h-40 font-montserrat font-[500] overflow-scroll"
            >{movieDetail.overview}
        </p>
        <div className='flex justify-between'>
          <span className="flex mb-4">
            <strong>Release Date:</strong>
            {movieDetail.release_date}
          </span>
          <button 
              className='flex items-center' 
              onClick={handleHeartClick}
              ><FaHeart className={`text-2xl ${isInWatchList ? 'text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>
          <div>
            <h3 className="font-bold">Homepage: 
              <a 
                href={movieDetail.homepage || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-blue-500 underline max-w-full block overflow-hidden whitespace-nowrap text-ellipsis ml-1'
                >{movieDetail.homepage ? movieDetail.homepage : 'N/A'}
                </a>
              </h3>
          </div>
      </div>
    </div>
  )
}

export default Modal