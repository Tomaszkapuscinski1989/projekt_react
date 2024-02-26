import { useGContext } from './Contex';

function Header() {
  const { name } = useGContext();
  return (
    <section className='headerPage1'>
      {!name ? (
        <h2>Spis książek</h2>
      ) : (
        <h2>Wynik wyszukiwania dla frazy: {name}</h2>
      )}
    </section>
  );
}
export default Header;
