function Book(props) {
  const { title, author, year, city, publishingHouse, img } = props;

  return (
    <section className='Book'>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
      <h6>Wydawnictwo {publishingHouse}</h6>
      <h6>
        {year} {city}
      </h6>
    </section>
  );
}
export default Book;
