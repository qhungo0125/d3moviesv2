import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Carditem = (props) => {
  const { info } = props;
  // console.log('1', info);
  return (
    <div
      onClick={(e) => (window.location.href = `/detail/${info.id}`)}
      className="cardItem"
    >
      <div className="overlay"></div>
      <LazyLoadImage
        effect="opacity"
        src={`${import.meta.env.VITE_API_IMGURL}${info.poster_path}`}
        alt={info.title}
      />
      <div className="sub__title">
        <h4>{info.title}</h4>
        <p>{info.release_date}</p>
      </div>
      <span className="vote__span">Vote: {info.vote_average.toFixed(1)}</span>
    </div>
  );
};

export default Carditem;
