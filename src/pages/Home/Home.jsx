
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import lavash from '../../assets/image/lavash.jpg'
import hoddok from '../../assets/image/hoddok.jpg'
import burger from '../../assets/image/burger.jpg'
import beshtalik from '../../assets/image/beshtalik.jpg'
import qoziqorin from '../../assets/image/qoziqorin.jpg'
import kartoshka from '../../assets/image/kartoshka.jpg'
import chuchvara from '../../assets/image/chuchvara.jpg'
import tuxum from '../../assets/image/tuxum.png'
import shorva from '../../assets/image/shorva.png'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';






function Home() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>

      <Navbar />
{/* 
      <div className="header">
        <div className="div">
          <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        
      >
        <SwiperSlide>
          <img className="header__lavash" src={lavash} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="header__lavash" src={burger} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="header__lavash" src={hoddok} /> 
        </SwiperSlide>
        <SwiperSlide>
          <img className="header__lavash" src={lavash} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="header__lavash" src={burger}/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="header__lavash" src={hoddok} />
        </SwiperSlide>
      </Swiper>

        </div>
        <Swiper
          // onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={2}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="header__img" src={lavash} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="header__img" src={hoddok} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="header__img" src={burger} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="header__img" src={lavash} />
          </SwiperSlide>
          


        </Swiper>

      </div>
 */}
      
        <div className="header">
        <img src={lavash} alt="" className="header__lavash" />
              <ul className="header__list">
                <li className="header__item">
                    <img className="header__img" src={lavash} alt="" />
                </li>
                <li className="header__item">
                    <img className="header__img" src={hoddok} alt="" />
                </li>
                <li className="header__item">
                    <img className="header__img" src={burger} alt="" />
                </li>
                <li className="header__item">
                    <img className="header__img" src={lavash} alt="" />
                </li>
                </ul> 
            </div>

      {/* -------------------main--------------------------- */}

      <Main />
      {/* -----------------------hero-------------------------- */}





      <div className="hero">
        <div className="container hero__container">
          <ul className="hero__list">
            <li className="hero__item">
              <img src={beshtalik} alt="" className="hero__img" />
              <h1 className="hero__title">Spicy seasoned seafood noodles</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">2.29 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={beshtalik} alt="" className="hero__img" />
              <h1 className="hero__title">x owls available</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">3.29 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={beshtalik} alt="" className="hero__img" />
              <h1 className="hero__title">Salted Pasta with mushroom sauce</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">5.29 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={beshtalik} alt="" className="hero__img" />
              <h1 className="hero__title">Beef dumpling in hot soup</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">3.29 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={qoziqorin} alt="" className="hero__img" />
              <h1 className="hero__title">Hot spicy fried rice with omelet</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">3.29 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={kartoshka} alt="" className="hero__img" />
              <h1 className="hero__title">Spicy instant noodle with</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">2.29 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={chuchvara} alt="" className="hero__img" />
              <h1 className="hero__title">constant noodle special omelette</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">2.9 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={tuxum} alt="" className="hero__img" />
              <h1 className="hero__title">constant noodle special omelette</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">2.9 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
            <li className="hero__item">
              <img src={shorva} alt="" className="hero__img" />
              <h1 className="hero__title">constant noodle special omelette</h1>
              <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="hero__box">
                <p className="hero__text__name">2.9 сум</p>
                <button className='hero__btn'>Заказать</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />



    </>
  )
}

export default Home
