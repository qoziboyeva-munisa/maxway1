

import './Xaggi.css'
import Navbar from '../../components/Navbar/Navbar'
import lavash from '../../assets/image/lavash.jpg'
import hoddok from '../../assets/image/hoddok.jpg'
import burger from '../../assets/image/burger.jpg'
import qazi from '../../assets/image/qazi.jpg'
import karam from '../../assets/image/karam.jpg'
import chips from '../../assets/image/chips.jpg'
import paxlava from '../../assets/image/paxlava.jpg'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

function Xaggi() {

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
                                <img src={karam} alt="" className="hero__img" />
                                  <h1 className="hero__title">Hot spicy fried rice with omelet</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">9.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={chips} alt="" className="hero__img" />
                                  <h1 className="hero__title">Spicy instant noodle with</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={qazi} alt="" className="hero__img" />
                                  <h1 className="hero__title">constant noodle special omelette</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.9 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={paxlava} alt="" className="hero__img" />
                                  <h1 className="hero__title">noodle with spinach</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">0.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={qazi} alt="" className="hero__img" />
                                  <h1 className="hero__title">Spicy seasoned seafood noodles</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={chips} alt="" className="hero__img" />
                                  <h1 className="hero__title">Hot spicy fried rice with omelet</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">5.29 сум</p>
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



export default Xaggi