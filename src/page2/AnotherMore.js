import { useParams } from 'react-router-dom';

const AnotherMore = (props) => {
  const param = useParams();

  const { dane } = props;

  const bookMore = param.id
    ? dane.filter((bb) => {
        return bb.id === Number(param.id);
      })[0]
    : dane[0];

  const { title, tom, img, id } = bookMore;

  return (
    <main className='another'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>Tom {id}</h3>
    </main>
  );
};
export default AnotherMore;
