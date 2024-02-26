import { useParams, NavLink, useLocation } from 'react-router-dom';
import { collection } from './books';

export const BookMore = () => {
  const param = useParams();
  const location = useLocation();
  console.log(location);

  const bookMore = collection.filter((bb) => {
    return bb.id === Number(param.id);
  });

  const { title, author, year, city, publishingHouse, img } = bookMore[0];
  const filter = location.state?.search || '';
  console.log(filter);
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
