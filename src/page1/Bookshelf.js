import { useSearchParams } from 'react-router-dom';
import Book from './Book';
import { useGContext } from './Contex';
import { useState } from 'react';

function Bookshelf(props) {
  const { dane } = props;

  function sortStr(a, b) {
    return a.title.localeCompare(b.title);
  }

  dane.sort(sortStr);

  const [Books, setBooks] = useState(dane);

  const { setName } = useGContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const titleFilter = searchParams.get('title');
  const authorFilter = searchParams.get('author');
  const publishingHouseFilter = searchParams.get('publishingHouse');

  let filterName = '';
  filterName = titleFilter ? `${filterName} ${titleFilter}` : `${filterName}`;
  filterName = authorFilter ? `${filterName} ${authorFilter}` : `${filterName}`;
  filterName = publishingHouseFilter
    ? `${filterName} ${publishingHouseFilter}`
    : `${filterName}`;
  //console.log(filterName);

  let newCollection = Books;

  newCollection = titleFilter
    ? newCollection.filter(
        (bb) => bb.title.toLowerCase() === titleFilter.toLowerCase()
      )
    : newCollection;
  newCollection = authorFilter
    ? newCollection.filter(
        (bb) => bb.author.toLowerCase() === authorFilter.toLowerCase()
      )
    : newCollection;
  newCollection = publishingHouseFilter
    ? newCollection.filter(
        (bb) =>
          bb.publishingHouse.toLowerCase() ===
          publishingHouseFilter.toLowerCase()
      )
    : newCollection;

  const searchFunction = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
    const typeFilter = searchParams.get(key);

    newCollection = typeFilter
      ? Books.filter((b) => {
          return b[key].toLowerCase() === typeFilter.toLowerCase();
        })
      : dane;
  };

  const newArray1 = (number) => {
    let bar1 = 0;
    if (number === 1) {
      bar1 = document.querySelector('#bar1');
      searchFunction('title', bar1.value);
    } else if (number === 2) {
      bar1 = document.querySelector('#bar2');
      searchFunction('author', bar1.value);
    } else if (number === 3) {
      bar1 = document.querySelector('#bar3');
      searchFunction('publishingHouse', bar1.value);
    }
    setName(filterName);

    newCollection.sort(sortStr);

    setBooks(newCollection);

    document.querySelector('#bar1').value = '';
    document.querySelector('#bar2').value = '';
    document.querySelector('#bar3').value = '';
  };

  const newArray2 = () => {
    dane.sort(sortStr);
    setBooks(dane);

    setName('');
    document.querySelector('#bar1').value = '';
    document.querySelector('#bar2').value = '';
    document.querySelector('#bar3').value = '';

    setSearchParams((prevParams) => {
      prevParams.delete('publishingHouse');
      prevParams.delete('author');
      prevParams.delete('title');

      return prevParams;
    });
  };

  return (
    <main>
      <h2>Wyszukaj</h2>
      <section>
        <h4>Tytuł</h4>
        <input id='bar1' type='text' />
        <button className='button' onClick={() => newArray1(1)}>
          Szukaj
        </button>
      </section>
      <section>
        <h4>Autor</h4>
        <input id='bar2' type='text' />
        <button className='button' onClick={() => newArray1(2)}>
          Szukaj
        </button>
      </section>
      <section>
        <h4>Wydawnictwo</h4>
        <input id='bar3' type='text' />
        <button className='button' onClick={() => newArray1(3)}>
          Szukaj
        </button>
      </section>
      <section>
        <button className='button button1' onClick={newArray2}>
          Wyczyść filtry
        </button>
      </section>
      <h3>Ilość wyników: {newCollection.length}</h3>
      {Books.length ? (
        <section className='Bookshelf'>
          {newCollection.map((book) => {
            const state = { search: `?${searchParams.toString()}` };
            return <Book params={book} params2={state} key={book.id} />;
          })}
        </section>
      ) : (
        <h3>Nie znaleziono pasującego rekordu</h3>
      )}
    </main>
  );
}
export default Bookshelf;
