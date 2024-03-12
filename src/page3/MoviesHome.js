import { useEffect } from 'react';
import { movies } from './movies';
import {
  Link,
  redirect,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';

export function loaderMovies() {
  const isLog = localStorage.getItem('loggedin');

  if (!isLog) {
    throw redirect('/login?log=no');
  }
  return movies;
}

const MoviesHome = () => {
  const dane = useLoaderData();

  const [count, setCount] = useOutletContext();

  useEffect(() => {
    if (localStorage.getItem('loggedin')) {
      setCount(true);
    }
  }, [count, setCount]);

  return (
    <main>
      <h2>Spis filmów</h2>
      <section className='movies'>
        {dane.map((m) => {
          return (
            <Link className='Book' key={m.id} to={`${m.id}`}>
              <img src={m.img} alt={m.title} />
              <h4>Tytuł: {m.title}</h4>
              <h5>reżyser: {m.director}</h5>'
            </Link>
          );
        })}
      </section>
    </main>
  );
};
export default MoviesHome;
