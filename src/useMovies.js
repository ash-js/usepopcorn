import { useState, useEffect } from 'react';
export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const KEY = '5a90ea64';

  useEffect(
    function () {
      const controller = new AbortController();
      async function searchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error('Something went wrong with fetching movies');
          const data = await res.json();
          if (data.Response === 'False') throw new Error('Movies not found');
          setMovies(data.Search);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            // console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }
      //   handleClosedMovie();
      /////
      searchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { isLoading, error, movies };
}
