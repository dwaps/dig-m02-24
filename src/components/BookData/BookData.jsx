import './BookData.css';

function BookData({ data }) {
  return (
    <div className="BookData">
      <div>
        <h5>Publisher:</h5>
        {data.publisher}
      </div>

      <div>
        <h5>Release date:</h5>
        {data.releaseDate}
      </div>

    </div>
  )
};

export default BookData;
