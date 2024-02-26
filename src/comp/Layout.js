import { Outlet } from 'react-router-dom';
import HeaderMain from './HeaderMain';
import FooterMain from './FooterMain';

const Layout = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <FooterMain />
    </>
  );
};
export default Layout;
