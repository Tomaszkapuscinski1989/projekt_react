import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Bookshelf from './Bookshelf';
import Header from './Header';
import Footer from './Footer';

// import './css/reset.css';
// import './css/index.css';
import './scss/index.scss';
import GlobalContext from './Contex';

function BookList() {
  return (
    <>
      <GlobalContext>
        <Header />
        <Bookshelf />
        <Footer />
      </GlobalContext>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<BookList />} />
    </Routes>
    <BookList />
  </BrowserRouter>
);
