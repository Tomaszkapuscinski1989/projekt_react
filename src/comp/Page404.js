import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <main className='page404'>
      <h2>Nie znaleziono strony o podanym adresie </h2>
      <Link className='button' to='.'>
        Strona Główna
      </Link>
    </main>
  );
};
export default Page404;
