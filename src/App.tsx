import Card from "./components/Card"
import SideNav from "./components/SideNav"
import TopNav from "./components/TopNav"
import React, { useState, useEffect } from 'react'
import Footer from "./components/Footer"
import { fetchMovies, searchMovies } from './components/utils/Api'
import GenreMap from "./components/utils/GenreMap"
import Modal from "./components/Modal"

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
  overview: string;
};

interface MovieDetailProps {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  homepage: string | null;
  
};

interface FilterProps {
  category: string;
  score: string;
  releaseDate: string;
};

function App() {

  const [filters, setFilters] = useState<FilterProps>({
    category: '',
    score: '',
    releaseDate: ''
  });
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieProps[]>([]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [watchList, setWatchList] = useState<MovieDetailProps[]>([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchMovies(10);
      setMovies(movies);
      setFilteredMovies(movies);
      console.log(movies);
      
    };

    loadMovies();

  },[]);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const toggleDropDown = () => {
    console.log("Dropdown toggled");
    setIsDropDownOpen((prevState) => !prevState);
  };

  const handleAddToWatchList = (movie: MovieDetailProps) => {
    const isAlreadyInWatchList = watchList.some((m) => m.id === movie.id);
    if (isAlreadyInWatchList) {
        setWatchList(watchList.filter((m) => m.id !== movie.id))
    } else {
      setWatchList([...watchList, movie]);
      console.log("updated watchlist:", [...watchList, movie]);
    }
  };

  const isMovieInWatchList = (id: number) => {
    return watchList.some((movie) => movie.id === id);
  };

  const handleRemoveFromWatchList = (movieId: number) => {
    setWatchList(watchList.filter((movie) => movie.id !== movieId))
  };

  const handleWatchListClick = (movieId: number) => {
    setSelectedMovieId(movieId);
    setIsModalOpen((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    console.log('modal close function triggered');
    setSelectedMovieId(null);
    setIsModalOpen(!isModalOpen);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const setValue = e.target.value
    setQuery(setValue);
  };

  const handleSearch = async() => {
    if (query) {
      let searchedMovies = await searchMovies(query);
      
      searchedMovies = searchedMovies.filter((movie: { poster_path: any }) => movie.poster_path)
      setFilteredMovies(searchedMovies);
    } else {
      setFilteredMovies(movies)
    }
  };

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prevFilters) => ({...prevFilters, [name]: value}));
  };
    
  const fetchAndFilterMovies = () => {

    let fetchedMovies = [...movies];


    if (filters.category) {
      const selectedGenreId = Object.keys(GenreMap).find(
        key => GenreMap[parseInt(key)] === filters.category);
      console.log(selectedGenreId);

      if (selectedGenreId) {
        fetchedMovies = fetchedMovies.filter((movie: { genre_ids: number[] }) => 
          movie.genre_ids.includes(parseInt(selectedGenreId)));
        console.log(filteredMovies);

      } 
    }
    if (filters.score) {
      
      switch (filters.score) {
        case '0-3':
          fetchedMovies = fetchedMovies.filter((movie: { vote_average: number }) => 
            movie.vote_average >= 0 && movie.vote_average < 3);
          break;
        case '3-7':
          fetchedMovies = fetchedMovies.filter((movie: { vote_average: number }) => 
            movie.vote_average >= 3 && movie.vote_average < 7);
          break;
        case '7-10':
          fetchedMovies = fetchedMovies.filter((movie: { vote_average: number }) => 
            movie.vote_average >= 7 && movie.vote_average <= 10);
          break;
        default:
          break;
      }
      fetchedMovies = fetchedMovies.sort((a,b) => b.vote_average - a.vote_average)
    }
    if (filters.releaseDate) {
        switch(filters.releaseDate) {
          case '2024':
            fetchedMovies = fetchedMovies.filter((movie: { release_date: string }) => 
              movie.release_date && movie.release_date.startsWith('2024')
            );
            break;
          case '2023':
              fetchedMovies = fetchedMovies.filter((movie: { release_date: string }) => 
                movie.release_date && movie.release_date.startsWith('2023')
              );
            break;
          case '2022':
              fetchedMovies = fetchedMovies.filter((movie: { release_date: string }) => 
                movie.release_date && movie.release_date.startsWith('2022')
              );
            break;
          case '2021':
              fetchedMovies = fetchedMovies.filter((movie: { release_date: string }) => 
                movie.release_date && movie.release_date.startsWith('2021')
              );
            break;
          case '2020 & Before':
              fetchedMovies = fetchedMovies.filter((movie: { release_date: string }) => 
                movie.release_date && parseInt(movie.release_date.slice(0, 4)) <= 2020
              );
            break;
          default:
            break;
        }
    };

    //ensure no movies without a poster are included
    fetchedMovies = fetchedMovies.filter(movie => movie.poster_path)

    // Remove duplicate movie based on their 'id'
    const uniqueMovies = fetchedMovies.filter((movie, index, self) => 
      self.findIndex(m => m.id === movie.id) === index)

    setFilteredMovies(uniqueMovies);

  };

  useEffect(() => {
    
    fetchAndFilterMovies();

  },[filters, movies]);

  
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 m-0 p-0 min-h-screen w-100%">
      <TopNav 
        query={query} 
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch}
        toggleSideNav={toggleSideNav}
        handleRemoveFromWatchList={handleRemoveFromWatchList}
        toggleDropDown={toggleDropDown}
        watchList={watchList}
        isDropDownOpen={isDropDownOpen}
        handleWatchListClick={handleWatchListClick}
        watchListCount={watchList.length}/>
      <SideNav 
        handleFilterChange={handleFilterChange}
        isOpen={isSideNavOpen}/>
      <main className="p-4">
        <Card 
          movies={filteredMovies} 
          setSelectedMovieId={setSelectedMovieId} />
      </main>
      {selectedMovieId && (
        <Modal 
          handleAddToWatchList={handleAddToWatchList} 
          movieId={selectedMovieId} 
          handleCloseModal={handleCloseModal}
          isMovieInWatchList={isMovieInWatchList} />
       )}
      <Footer />
        
    </div>
  );
};

export default App
