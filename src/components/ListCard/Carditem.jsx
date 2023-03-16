import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const Carditem = (props) => {
  const { info } = props;
  const navi = useNavigate();
  // console.log('1', info);
  return (
    <div onClick={(e) => navi(`/detail/${info.id}`)} className="cardItem">
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
