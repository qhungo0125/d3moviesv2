import React from 'react';
import { useParams } from 'react-router-dom';
import MainDetail from '../../components/MainDetail/MainDetail';
import SubSlider from '../../components/SubSlider/SubSlider';
import Trailer from '../../components/Trailer/Trailer';
const Detail = () => {
  const { id } = useParams();
  console.log(id);
  React.useEffect(() => {}, [id]);
  return (
    <div className="detail__container">
      <MainDetail id={id} />
      <Trailer id={id} />
      <SubSlider hidebtn={true} type={'similar'} id={id} />
    </div>
  );
};

export default Detail;
