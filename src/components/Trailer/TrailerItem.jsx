import React from 'react';
import './Trailer.scss';
const TrailerItem = (props) => {
  const { info } = props;
  //   console.log(info);
  return (
    <div className="trailer__item">
      <h3>{'Trailer: ' + info.name}</h3>
      <div className="trailer_vid">
        <iframe src={`https://youtube.com/embed/${info.key}`}></iframe>
      </div>
    </div>
  );
};

export default TrailerItem;
