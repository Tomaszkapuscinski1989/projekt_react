import { Link } from 'react-router-dom';

function Book(props) {
  const { title, author, year, city, publishingHouse, img, id } = props.params;

  return (
    <Link className='Book' to={`${id}`} state={props.params2}>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
      <h6>Wydawnictwo {publishingHouse}</h6>
      <h6>
        {year} {city}
      </h6>
    </Link>
  );
}
export default Book;
