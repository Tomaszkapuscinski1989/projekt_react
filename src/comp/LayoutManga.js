import { NavLink, Outlet } from 'react-router-dom';

const LayoutManga = () => {
  const activeLink = ({ isActive }) => (isActive ? 'red' : null);
  return (
    <>
      <nav className='navManga'>
        <NavLink className={activeLink} to='.' end>
          Strona Główna
        </NavLink>
        <NavLink className={activeLink} to='Another'>
          Another
        </NavLink>
        <NavLink className={activeLink} to='NHK'>
          NHK
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default LayoutManga;
