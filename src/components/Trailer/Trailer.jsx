import React from 'react';
import moviesAPI from '../../api/moviesAPI';
import TrailerItem from './TrailerItem';

const Trailer = (props) => {
  const [vidTrailers, setVid] = React.useState([]);
  const { id } = props;
  React.useEffect(() => {
    const fetchData = async () => {
      let trailers = await moviesAPI.getTrailer(id);
      setVid(trailers.results.slice(0, 2));

      //   console.log(trailers.results.slice(0, 2));
    };
    fetchData();
  }, []);
  return (
    <div className="trailer__container">
      {vidTrailers.map((item, index) => {
        return <TrailerItem key={index} info={item} />;
      })}
    </div>
  );
};

export default Trailer;
