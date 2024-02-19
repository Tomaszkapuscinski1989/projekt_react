import { useGContext } from './Contex';

function Footer() {
  const { name } = useGContext();
  return (
    <footer>
      <a href='../index.html'>Strona Główna</a>
      {!name ? (
        <h1>Spis książek na dzień 01.02.2024r.</h1>
      ) : (
        <h1>Wynik wyszukiwania dla frazy: {name}</h1>
      )}
      <a href='../index.html'>Strona Główna</a>
    </footer>
  );
}
export default Footer;
