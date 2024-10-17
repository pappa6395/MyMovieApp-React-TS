
const fetchMovies = async (totalPages: number): Promise<any> => {
    
    try {
        const apiKey ='5e1c5c3eb1b1156c4173dcb78525e25b'
        const movies = [];

        for (let page = 1; page <= totalPages; page++) {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
            );
            const data = await response.json();

            if (data.results) {
                movies.push(...data.results);
            }
        }
        
        return movies;

    } catch (error) {
        console.log("Failed to fetch movies:", error);
        return [];
    }
    
};

const searchMovies = async (query: string): Promise<any> => {
    
    try {
        const apiKey ='5e1c5c3eb1b1156c4173dcb78525e25b'
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
        const data = await response.json()

        return data.results || [];

    } catch (error) {
        console.log("Failed to fetch movies:", error);
        return [];
    }
    
}

const fetchMovieDetails = async(movieId: number) => {

    try {
        const apiKey ='5e1c5c3eb1b1156c4173dcb78525e25b'
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_respond=credits`);
        const movieData = await response.json();
    return {
        id: movieData.id,
        title: movieData.title,
        poster_path: movieData.poster_path,
        overview: movieData.overview,
        release_date: movieData.release_date,
        homepage: movieData.homepage,
        };
    } catch (error) {
        console.log('Error fetching movie details:', error);
        return null;
    }
    
}

export { fetchMovies, searchMovies, fetchMovieDetails };