import React from 'react'
import { FaStar, FaStarHalf } from "react-icons/fa";


interface TypeCardProps {
    image: string;
    title: string;
    score: number;
    movieType: string;
    releaseDate: string;
}

const TypeCard: React.FC<TypeCardProps> = ({ 
    image, 
    title, 
    score, 
    movieType, 
    releaseDate }) => {

    const generateStars = (score: number): JSX.Element[] => {
        const stars: JSX.Element[] = [];

        for (let i = 1; i <= Math.floor(score /2); i++) {
            stars.push(<FaStar key={i} className="text-[#d5ab55]" />);
        }
        if (score % 2 !== 0) {
            stars.push(<FaStarHalf key="half" className="text-[#d5ab55]" />);
        }
        
        return stars;
    }


  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-64">
        <div>
            <img 
                src={image} 
                alt={title} 
                className="w-full h-72 object-cover rounded-t-lg mb-4"/>
            
            <h2 className="text-xl fount-bold mb-2 truncate" >{title}</h2>
        </div>
        <div className="flex items-center mb-2">
            <span className="text-lg font-bold">{score.toFixed(1)}/10</span>
            <div className="ml-2 flex text-[#d5ab55]">{generateStars(score)}</div>
        </div>
        <div className="text-sm text-gray-400 h-[45px] mb-2">
            <span>Genre: {movieType}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-400">
            <span>Release: {releaseDate}</span>
        </div>

    </div>
  )
}

export default TypeCard