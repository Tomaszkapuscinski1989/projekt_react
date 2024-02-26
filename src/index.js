import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { IndexPage1 } from './page1/IndexPage1';

import './scss/index.scss';
import IndexHomePage from './pageHome/IndexHomePage';
import { BookMore } from './page1/BookMore';
import Layout from './comp/Layout';
import IndexPage2 from './page2/IndexPage2';

import LayoutManga from './comp/LayoutManga';
import LayoutAnother from './comp/LayoutAnother';
import AnotherMore from './page2/AnotherMore';

import { anotherDane } from './page2/AnotherDame';
import { NHKDane } from './page2/NHKDane';

function MainPage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexHomePage />} />
            <Route path='Lista_ksiazek' element={<IndexPage1 />} />
            <Route path='Lista_ksiazek/:id' element={<BookMore />} />

            <Route path='Manga' element={<LayoutManga />}>
              <Route index element={<IndexPage2 />} />

              <Route
                path='Another'
                element={<LayoutAnother dane={anotherDane} />}
              >
                <Route index element={<AnotherMore dane={anotherDane} />} />
                <Route
                  path=':id'
                  element={<AnotherMore dane={anotherDane} />}
                />
              </Route>
              <Route path='NHK' element={<LayoutAnother dane={NHKDane} />}>
                <Route index element={<AnotherMore dane={NHKDane} />} />
                <Route path=':id' element={<AnotherMore dane={NHKDane} />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MainPage />);
