import Book from './Book';
import { useGContext } from './Contex';
import { collection } from './books';
import { useEffect, useState } from 'react';

function Bookshelf() {
  function sortStr(a, b) {
    return a.title.localeCompare(b.title);
  }

  collection.sort(sortStr);

  const [Books, setBooks] = useState(collection);
  const [List, setList] = useState(false);
  const { setName } = useGContext();

  const newArray1 = (number) => {
    let bar1 = 0;
    if (number === 1) {
      bar1 = document.querySelector('#bar1');
    } else if (number === 2) {
      bar1 = document.querySelector('#bar2');
    } else if (number === 3) {
      bar1 = document.querySelector('#bar3');
    }
    setName(bar1.value);
    const newCollection = Books.filter((book) => {
      let result = 0;
      if (number === 1) {
        result = book.title.toLowerCase() === bar1.value.toLowerCase();
      } else if (number === 2) {
        result = book.author.toLowerCase() === bar1.value.toLowerCase();
      } else if (number === 3) {
        result =
          book.publishingHouse.toLowerCase() === bar1.value.toLowerCase();
      }
      return result;
    });
    newCollection.sort(sortStr);

    setBooks(newCollection);

    document.querySelector('#bar1').value = '';
    document.querySelector('#bar2').value = '';
    document.querySelector('#bar3').value = '';
  };

  const newArray2 = () => {
    collection.sort(sortStr);
    setBooks(collection);
    setList(false);
    setName('');
    document.querySelector('#bar1').value = '';
    document.querySelector('#bar2').value = '';
    document.querySelector('#bar3').value = '';
  };
  useEffect(() => {
    if (!Books.length) {
      setList(true);
    }
  }, [Books]);

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
      <h3>Ilość wyników: {Books.length}</h3>
      {!List ? (
        <section className='Bookshelf'>
          {Books.map((book) => {
            return <Book {...book} key={book.id} />;
          })}
        </section>
      ) : (
        <h3>Nie znaleziono pasującego rekordu</h3>
      )}
    </main>
  );
}
export default Bookshelf;
