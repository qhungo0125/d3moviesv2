import React from 'react';
import ListCard from '../../components/ListCard/ListCard';

const Collection = (props) => {
  return (
    <div className="collection">
      <ListCard type={props.type} />
    </div>
  );
};

export default Collection;
