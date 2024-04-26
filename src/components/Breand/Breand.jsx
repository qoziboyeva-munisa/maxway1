

import './Breand.css'
import Navbar from '../../components/Navbar/Navbar'
import lavash from '../../assets/image/lavash.jpg'
import hoddok from '../../assets/image/hoddok.jpg'
import burger from '../../assets/image/burger.jpg'
import gosht1 from '../../assets/image/gosht1.jpg'
import gosht2 from '../../assets/image/gosht2.jpg'
import gosht3 from '../../assets/image/gosht3.jpg'
import gosht4 from '../../assets/image/gosht4.jpg'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

function Breand() {

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
                                <img src={gosht1} alt="" className="hero__img" />
                                  <h1 className="hero__title">noodle with spinach</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">0.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={gosht2} alt="" className="hero__img" />
                                  <h1 className="hero__title">Spicy seasoned seafood noodles</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={gosht3} alt="" className="hero__img" />
                                  <h1 className="hero__title">x owls available</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={gosht4} alt="" className="hero__img" />
                                  <h1 className="hero__title">Salted Pasta with mushroom sauce  </h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">5.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={gosht1} alt="" className="hero__img" />
                                  <h1 className="hero__title">Beef dumpling in hot soup</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={gosht2} alt="" className="hero__img" />
                                  <h1 className="hero__title">Beef dumpling in hot soup</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
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



export default Breand