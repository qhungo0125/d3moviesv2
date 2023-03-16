import React from 'react';
import ListCard from '../../components/ListCard/ListCard';

const UpComing = (props) => {
  return (
    <div className="collection">
      <ListCard type={props.type} />
    </div>
  );
};

export default UpComing;
