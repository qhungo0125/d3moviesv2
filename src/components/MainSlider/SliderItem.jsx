import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainSlider.scss';

const SliderItem = (props) => {
  const { info } = props;
  const [loadMore, setLoadMore] = React.useState(false);
  const navi = useNavigate();

  return (
    <div className="movie__container">
      <img
        className="movie__img"
        src={`${import.meta.env.VITE_API_IMGURL}${info.backdrop_path}`}
        alt={info.title}
      />

      <div className="movie__description">
        <div className="description">
          <h3 className="title">{info.title}</h3>
          <p className="overview">
            {loadMore ? info.overview : info.overview.slice(0, 200)}
            {loadMore ? (
              <span onClick={(e) => setLoadMore(false)}>...Read less</span>
            ) : (
              <span onClick={(e) => setLoadMore(true)}>...Read more</span>
            )}
          </p>
          <button
            onClick={(e) => navi(`/detail/${info.id}`)}
            className="movie__watch__btn"
          >
            watch now
          </button>
        </div>
        <img
          src={`${import.meta.env.VITE_API_IMGURL}${info.poster_path}`}
          alt={info.title}
        />
      </div>
    </div>
  );
};

export default SliderItem;
