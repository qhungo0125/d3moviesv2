import React from 'react';
import { useNavigate } from 'react-router-dom';

const SSliderItem = (props) => {
  const navi = useNavigate();
  const { info } = props;
  return (
    <div
      onClick={(e) => navi(`/detail/${info.id}`)}
      className="sub__slider__item"
    >
      <div className="overlay"></div>

      <span>Vote: {info.vote_average.toFixed(1)}</span>
      <img
        src={`${import.meta.env.VITE_API_IMGURL}${info.poster_path}`}
        alt={info.title}
      />

      <div className="sub__title">
        <h4>{info.title}</h4>
        <p>{info.release_date}</p>
      </div>
    </div>
  );
};

export default SSliderItem;
