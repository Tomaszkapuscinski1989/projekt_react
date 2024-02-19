import { useGContext } from './Contex';

function Header() {
  const { name } = useGContext();
  return (
    <header>
      <a href='../index.html'>Strona Główna</a>
      {!name ? (
        <h1>Moja mała biblioteczka</h1>
      ) : (
        <h1>Wynik wyszukiwania dla frazy: {name}</h1>
      )}
      <a href='../index.html'>Strona Główna</a>
    </header>
  );
}
export default Header;
