import React from 'react';

const SSliderItem = (props) => {
  const { info } = props;
  return (
    <div
      onClick={(e) => (window.location.href = `/detail/${info.id}`)}
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
