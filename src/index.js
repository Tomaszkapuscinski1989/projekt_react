import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { IndexPage1, loader } from './page1/IndexPage1';

import './scss/index.scss';
import IndexHomePage from './pageHome/IndexHomePage';
import { BookMore, loader2 } from './page1/BookMore';
import Layout from './comp/Layout';
import IndexPage2 from './page2/IndexPage2';

import LayoutManga from './comp/LayoutManga';
import LayoutAnother from './comp/LayoutAnother';
import AnotherMore from './page2/AnotherMore';

import { anotherDane } from './page2/AnotherDame';
import { NHKDane } from './page2/NHKDane';
import Page404 from './comp/Page404';
import ErrorPage1 from './comp/ErrorPage1';
import MoviesHome, { loaderMovies } from './page3/MoviesHome';
import Login, { LoginLoader, action } from './page3/Login';
import { MoviesMore, loader22 } from './page3/MoviesMore';
import Logout from './comp/Logout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='*' element={<Page404 />} />
      <Route
        path='login'
        element={<Login />}
        loader={LoginLoader}
        action={action}
      />
      <Route index element={<IndexHomePage />} errorElement={<ErrorPage1 />} />
      <Route path='Logout' element={<Logout />} />
      <Route path='Lista_ksiazek' element={<IndexPage1 />} loader={loader} />
      <Route
        path='Lista_ksiazek/:id'
        element={<BookMore />}
        errorElement={<ErrorPage1 />}
        loader={loader2}
      />
      <Route
        path='Lista_filmow'
        element={<MoviesHome />}
        loader={loaderMovies}
      />
      <Route
        path='Lista_filmow/:id'
        element={<MoviesMore />}
        loader={loader22}
      />
      <Route
        path='Manga'
        element={<LayoutManga />}
        errorElement={<ErrorPage1 />}
      >
        <Route index element={<IndexPage2 />} />

        <Route path='Another' element={<LayoutAnother dane={anotherDane} />}>
          <Route index element={<AnotherMore dane={anotherDane} />} />
          <Route path=':id' element={<AnotherMore dane={anotherDane} />} />
        </Route>
        <Route path='NHK' element={<LayoutAnother dane={NHKDane} />}>
          <Route index element={<AnotherMore dane={NHKDane} />} />
          <Route path=':id' element={<AnotherMore dane={NHKDane} />} />
        </Route>
      </Route>
    </Route>
  )
);

function MainPage() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MainPage />);
