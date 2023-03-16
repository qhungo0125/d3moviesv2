import React from 'react';
import './SubSlider.scss';
import moviesAPI from '../../api/moviesAPI';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import SSliderItem from './SSliderItem';
import { useNavigate } from 'react-router-dom';

const SubSlider = (props) => {
  const [movies, setMovies] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const { type, id, hidebtn } = props;
  const navi = useNavigate();

  React.useEffect(() => {
    switch (type) {
      case 'upcoming': {
        const fetchMovies = async () => {
          const data = await moviesAPI.getUpComingMovies();
          setMovies(data.results);
          setTitle('up coming movies');
        };
        fetchMovies();
        break;
      }
      case 'toprated': {
        const fetchMovies = async () => {
          const data = await moviesAPI.getTopRatedMovies();
          setMovies(data.results);
          setTitle('top rated movies');
        };
        fetchMovies();
        break;
      }

      case 'similar': {
        const fetchMovies = async () => {
          const data = await moviesAPI.getSimilar(id);
          setMovies(data.results);
          setTitle('similar movies');
        };
        fetchMovies();
        break;
      }

      default: {
        const fetchMovies = async () => {
          const data = await moviesAPI.getPopularMovies();
          setMovies(data.results);
          setTitle('popular movies');
        };
        fetchMovies();
        break;
      }
    }
  }, []);

  return (
    <div className="sslider__container">
      <div className="title__container">
        <h3 className="sslider__title">{title}</h3>
        {!hidebtn && (
          <button
            onClick={(e) => {
              type ? navi(`/${type}`) : navi('/popular');
            }}
          >
            show all
          </button>
        )}
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          601: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <SSliderItem info={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SubSlider;
