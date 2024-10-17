import React from 'react'
import { GoSearch } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaBars, FaRegBell } from "react-icons/fa";
import WatchList from './TopNav/WatchList';


interface MovieDetailProps {
    id: number;
    title: string;
    poster_path: string | null;
    overview: string;
    release_date: string;
    homepage: string | null;
    
  }

interface TopNavProps {
    query: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    toggleSideNav: () => void;
    handleRemoveFromWatchList: (movieId: number) => void;
    toggleDropDown: () => void;
    watchList: MovieDetailProps[];
    isDropDownOpen: boolean;
    handleWatchListClick: (movieId: number) => void;
    watchListCount: number;
}

const TopNav: React.FC<TopNavProps> = ({ 
    query, 
    handleInputChange, 
    handleSearch, 
    toggleSideNav,  
    handleRemoveFromWatchList,
    toggleDropDown,
    isDropDownOpen,
    watchList, 
    handleWatchListClick, 
    watchListCount }) => {
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

  return (
    <div>
        <nav className="fixed flex top-0 left-0 w-full h-[64px] bg-gradient-to-r from-slate-900 to-slate-700 z-10 shadow-md">
            <div className="container flex">
                <div className="flex items-center">
                    <button 
                        className='text-white text-3xl md-hidden ml-2' 
                        onClick={toggleSideNav}>
                        <FaBars />
                    </button>
                    <div className="text-white pl-[10px] mx-auto  text-2xl font-bold">
                        <a href="/">MyMovieApp</a>
                    </div>
                </div>
                <div className='container flex mx-auto space-x-10 md:w-auto'>
                    <div className="flex items-center ml-3">
                        <input className="px-4 py-2 w-[300px] text-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                            type="text" 
                            placeholder='Search movies...' 
                            value={query}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress} />
                        <button onClick={handleSearch} className="bg-blue-500 text-white text-3xl px-4 py-2 
                            rounded-2xl ml-2 hover:bg-blue-600 transition">
                            <GoSearch />
                        </button>
                    </div>
                </div>
                <div className="flex space-x-10 md:w-auto">
                    <div className="flex self-center ml-3 gap-5">
                        <WatchList 
                            handleRemoveFromWatchList={handleRemoveFromWatchList} 
                            watchList={watchList}
                            toggleDropDown={toggleDropDown}
                            isDropDownOpen={isDropDownOpen}
                            handleWatchListClick={handleWatchListClick}
                            watchListCount={watchListCount}/>
                        <a href='#' className='text-gray-100 cursor-pointer'>
                        <FaRegBell className='h-6 w-6' />
                        </a>
                        <a href='#' className='text-gray-100 cursor-pointer'>
                        <AiOutlineUserAdd className='h-6 w-6' />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>

  )
}

export default TopNav