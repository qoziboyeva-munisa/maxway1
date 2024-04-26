
import './Senvich.css'
import Navbar from '../../components/Navbar/Navbar'
import lavash from '../../assets/image/lavash.jpg'
import hoddok from '../../assets/image/hoddok.jpg'
import burger from '../../assets/image/burger.jpg'
import salat from '../../assets/image/salat.jpg'
import baliq from '../../assets/image/baliq.jpg'
import taom from '../../assets/image/taom.jpg'
import qiyma from '../../assets/image/qiyma.jpg'
import kok from '../../assets/image/kok.jpg'
import lagmon from '../../assets/image/lagmon.png'
import baqala from '../../assets/image/baqala.jpg'
import pomidor from '../../assets/image/pomidor.jpg'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

function Senvich() {

  return (
    <>
    
    




        <Navbar/>
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
           
  <Main/>
                {/* -----------------------hero-------------------------- */}

                <div className="hero">
                    <div className="container hero__container">
                        <ul className="hero__list">
                            <li className="hero__item">
                                <img src={salat} alt="" className="hero__img" />
                                  <h1 className="hero__title">Spicy seasoned seafood noodles</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={taom} alt="" className="hero__img" />
                                  <h1 className="hero__title">x owls available</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={qiyma} alt="" className="hero__img" />
                                  <h1 className="hero__title">Salted Pasta with mushroom sauce</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">5.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={kok} alt="" className="hero__img" />
                                  <h1 className="hero__title">Beef dumpling in hot soup</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={lagmon} alt="" className="hero__img" />
                                  <h1 className="hero__title">Healthy noodle with spinach leaf</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={kok} alt="" className="hero__img" />
                                  <h1 className="hero__title">Hot spicy fried rice with omelet</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">9.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={baqala} alt="" className="hero__img" />
                                  <h1 className="hero__title">Spicy instant noodle with</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={pomidor} alt="" className="hero__img" />
                                  <h1 className="hero__title">constant noodle special omelette</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.9 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={baliq} alt="" className="hero__img" />
                                  <h1 className="hero__title">Healthy noodle with spinach leaf</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
        
        <Footer/>
    


    </>
  )
}



export default Senvich