import { NavLink, Outlet } from 'react-router-dom';

const LayoutAnother = (props) => {
  const activeLink = ({ isActive }) => (isActive ? 'red' : null);
  const { dane } = props;
  return (
    <main className='manga'>
      <nav>
        <NavLink end className={activeLink} to='.'>
          Strona Główna
        </NavLink>

        <ul>
          {dane.map((tom) => {
            if (tom.id > 0) {
              return (
                <NavLink className={activeLink} to={`${tom.id}`} key={tom.id}>
                  Tom numer{tom.tom}
                </NavLink>
              );
            }
          })}
        </ul>
      </nav>
      <section className='manga'>
        <Outlet />;
      </section>
    </main>
  );
};
export default LayoutAnother;
