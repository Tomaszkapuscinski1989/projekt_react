import { NavLink, useLocation, useLoaderData } from 'react-router-dom';
import { collection } from './books';

export function loader2(props) {
  const { params } = props;

  const bookMore = collection.filter((bb) => {
    return bb.id === Number(params.id);
  });
  return bookMore;
}

export const BookMore = () => {
  const location = useLocation();
  const bookMore = useLoaderData();

  const { title, author, year, city, publishingHouse, img } = bookMore[0];
  const filter = location.state?.search || '';

  return (
    <main className='BookMorePage'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>Wydawnictwo {publishingHouse}</h4>
      <h5>
        {year} {city}
      </h5>
      <NavLink to={`..${filter}`} relative='path'>
        &larr; do listy Książek
      </NavLink>
    </main>
  );
};
