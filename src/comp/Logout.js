import { Link, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
  localStorage.removeItem('loggedin');

  const [count, setCount] = useOutletContext();

  useEffect(() => {
    if (!localStorage.getItem('loggedin')) {
      setCount(false);
    }
  }, [count, setCount]);

  return (
    <main className='page404'>
      <h2>Pomyślnie wylogowano</h2>
      <Link className='button' to='..'>
        Strona Główna
      </Link>
    </main>
  );
};
export default Logout;
