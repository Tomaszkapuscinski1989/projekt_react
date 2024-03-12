import { Link } from 'react-router-dom';

const ErrorPage1 = () => {
  return (
    <main className='error'>
      <h2>Wystąpił nieoczekiwany błąd</h2>
      <Link className='button' to='.'>
        Strona Główna
      </Link>
    </main>
  );
};
export default ErrorPage1;
