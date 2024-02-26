import Header from './Header';

import Bookshelf from './Bookshelf';

import GlobalContext from './Contex';

export const IndexPage1 = () => {
  return (
    <>
      <GlobalContext>
        <Header />
        <Bookshelf />
      </GlobalContext>
    </>
  );
};
