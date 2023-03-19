import React from 'react';
import './MainDetail.scss';
import moviesAPI from '../../api/moviesAPI';
import CasterItem from './CasterItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

const MainDetail = (props) => {
  const { id } = props;
  const [info, setInfo] = React.useState();
  const [casters, setCasters] = React.useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      let data = await moviesAPI.getInfo(id);
      let cas = await moviesAPI.getCaster(id);
      //   console.log(cas.cast);
      setCasters(cas.cast.slice(0, 5));
      setInfo(data);
      //   console.log('data', data);
    };
    fetchData();
  }, [id]);
  return (
    info && (
      <div className="main__detail">
        <img
          className="movie__img"
          src={`${import.meta.env.VITE_API_IMGURL}${info.backdrop_path}`}
          alt={info.title}
        />

        <div className="movie__description">
          <img
            className="movie__ava"
            src={`${import.meta.env.VITE_API_IMGURL}${info.poster_path}`}
            alt={info.title}
          />
          <div className="description">
            <h3 className="title">{info.title}</h3>
            <p className="genres">
              {info.genres?.map((gen) => {
                console.log(gen);
                return <span key={gen.id}>{gen.name}</span>;
              })}
              <span>{`${info.runtime} minutes`}</span>
            </p>
            <p className="overview">{info.overview}</p>
            <div className="casters">
              <h3>casters:</h3>
              <div className="casts__collection">
                <Swiper
                  // modules={[Autoplay]}
                  // autoplay={{ delay: 5000 }}
                  // loop={true}
                  // scrollbar={{ draggable: true }}
                  breakpoints={{
                    0: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    601: {
                      slidesPerView: 4,
                      spaceBetween: 5,
                    },
                    1025: {
                      slidesPerView: 5,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {casters.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <CasterItem info={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MainDetail;
