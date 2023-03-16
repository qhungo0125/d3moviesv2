import React from 'react';
import moviesAPI from '../../api/moviesAPI';
import SliderItem from './SliderItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

const MainSlider = () => {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const getPopular = async () => {
      let movies = await moviesAPI.getPopularMovies();
      setMovies(movies.results);
    };
    getPopular();
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {movies.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <SliderItem info={movie} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainSlider;
