import { Outlet, Link } from 'react-router-dom';

import { useState } from 'react';

const Layout = () => {
  const [count, setCount] = useState(localStorage.getItem('loggedin'));

  return (
    <>
      <header>
        <a href='https://tomaszkapuscinski1989.github.io/'>Portfolio</a>

        <nav>
          <Link to='.'>Strona Główna</Link>
          <Link to='Lista_ksiazek'>Spis książek</Link>
          <Link to='Manga'>Spis manga</Link>
          <Link to='Lista_filmow'>Spis filmów</Link>
          {!count ? (
            <Link to='login'>Zaloguj</Link>
          ) : (
            <Link to='Logout'>Wyloguj</Link>
          )}
        </nav>
      </header>
      <Outlet context={[count, setCount]} />
      <footer>
        <small> &copy; copyright Tomasz Kapuściński</small>
      </footer>
    </>
  );
};
export default Layout;
