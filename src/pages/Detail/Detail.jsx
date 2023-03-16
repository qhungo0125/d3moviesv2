import React from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../api/moviesAPI';
import MainDetail from '../../components/MainDetail/MainDetail';
import SubSlider from '../../components/SubSlider/SubSlider';
import Trailer from '../../components/Trailer/Trailer';
const Detail = () => {
  const { id } = useParams();
  console.log(id);
  React.useEffect(() => {
    const fetchData = async () => {
      let data = await moviesAPI.getInfo(id);
      let trailers = await moviesAPI.getTrailer(id);
      let similars = await moviesAPI.getSimilar(id);
    };
    fetchData();
  }, []);
  return (
    <div className="detail__container">
      <MainDetail id={id} />
      <Trailer id={id} />
      <SubSlider hidebtn={true} type={'similar'} id={id} />
    </div>
  );
};

export default Detail;
