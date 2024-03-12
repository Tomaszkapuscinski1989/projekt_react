import Header from './Header';

import Bookshelf from './Bookshelf';
import { collection } from './books';

import GlobalContext from './Contex';
import { useLoaderData } from 'react-router-dom';

export function loader() {
  return collection;
}

export const IndexPage1 = () => {
  const dane = useLoaderData();
  return (
    <>
      <GlobalContext>
        <Header />
        <Bookshelf dane={dane} />
      </GlobalContext>
    </>
  );
};
