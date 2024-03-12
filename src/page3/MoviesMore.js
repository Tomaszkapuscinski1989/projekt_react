import { NavLink, redirect, useLoaderData } from 'react-router-dom';
import { movies } from './movies';

export function loader22(props) {
  const isLog = localStorage.getItem('loggedin');
  const path = new URL(props.request.url).pathname;
  const { params } = props;

  if (!isLog) {
    throw redirect(`/login?log=no&re=${path}`);
  }

  const bookMore = movies.filter((bb) => {
    return bb.id === Number(params.id);
  });
  return bookMore;
}

export const MoviesMore = () => {
  const bookMore = useLoaderData();

  const { title, director, year, img } = bookMore[0];

  return (
    <main className='BookMorePage'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{director}</h3>

      <h5>{year}</h5>
      <NavLink to='..' relative='path'>
        &larr; do listy filmów
      </NavLink>
    </main>
  );
};
