import React from 'react';
import moviesAPI from '../../api/moviesAPI';
import { useParams } from 'react-router-dom';
import ListCard from '../../components/ListCard/ListCard';

const Search = (props) => {
  const { content } = useParams();
  const { type } = props;
  console.log(type);
  return (
    <div className="search__container">
      <ListCard type={type} content={content} />
    </div>
  );
};

export default Search;
