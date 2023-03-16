import React from 'react';
import './ListCard.scss';
import moviesAPI from '../../api/moviesAPI';
import Carditem from './Carditem';

const ListCard = (props) => {
  const { type, content } = props;
  const [page, setPage] = React.useState(1);
  const [cards, setCards] = React.useState([]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    switch (type) {
      case 'popular': {
        const fetchMovie = async () => {
          const data = await moviesAPI.getPopularMovies(page);
          cards.length === 0
            ? setCards(data.results)
            : setCards([...cards, ...data.results]);
        };
        fetchMovie();
        break;
      }
      case 'upcoming': {
        const fetchMovie = async () => {
          const data = await moviesAPI.getUpComingMovies(page);
          cards.length === 0
            ? setCards(data.results)
            : setCards([...cards, ...data.results]);
        };
        fetchMovie();
        break;
      }
      case 'toprated': {
        console.log('dung roi ne');
        const fetchMovie = async () => {
          const data = await moviesAPI.getTopRatedMovies(page);
          console.log('data ', data);
          cards.length === 0
            ? setCards(data.results)
            : setCards([...cards, ...data.results]);
        };
        fetchMovie();
        break;
      }
      case 'search': {
        const fetchMovie = async () => {
          let data = await moviesAPI.searchContent(content, page);
          cards.length === 0
            ? setCards(data.results)
            : setCards([...cards, ...data.results]);
        };
        fetchMovie();
        break;
      }
      default:
        console.log('invalid type');
    }
  }, [page, type]);

  return (
    <div className="listcard__container">
      <div className="listcard">
        {cards.map((card, index) => (
          <Carditem key={index} info={card} />
        ))}
      </div>
      <button onClick={handleLoadMore} className="load__btn">
        load more
      </button>
    </div>
  );
};

export default ListCard;
