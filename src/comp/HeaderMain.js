import { Link } from 'react-router-dom';

const HeaderMain = () => {
  return (
    <header>
      <a href='../index.html'>Portfolio</a>

      <nav>
        <Link to='.'>Strona Główna</Link>
        <Link to='Lista_ksiazek'>Spis książek</Link>
        <Link to='Manga'>Spis manga</Link>
      </nav>
    </header>
  );
};
export default HeaderMain;
