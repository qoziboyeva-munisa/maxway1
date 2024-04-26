
import './Pizza.css'
import Navbar from '../../components/Navbar/Navbar'
import lavash from '../../assets/image/lavash.jpg'
import hoddok from '../../assets/image/hoddok.jpg'
import burger from '../../assets/image/burger.jpg'
import mastava from '../../assets/image/mastava.jpg'
import shulla from '../../assets/image/shulla.jpg'
import shorva from '../../assets/image/shorva.jpg'
import oqshorva from '../../assets/image/oqshorva.jpg'
import mastovna from '../../assets/image/mastovna.jpg'
import zanbariq from '../../assets/image/zanbariq.jpg'
import atala from '../../assets/image/atala.jpg'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

function Pizza() {

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
                                <img src={mastava} alt="" className="hero__img" />
                                  <h1 className="hero__title">noodle with spinach</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">0   .29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={shulla} alt="" className="hero__img" />
                                  <h1 className="hero__title">Spicy seasoned seafood noodles</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={shorva} alt="" className="hero__img" />
                                  <h1 className="hero__title">x owls available</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={shorva} alt="" className="hero__img" />
                                  <h1 className="hero__title">Salted Pasta with mushroom sauce</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={oqshorva} alt="" className="hero__img" />
                                  <h1 className="hero__title">Beef dumpling in hot soup</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={mastovna} alt="" className="hero__img" />
                                  <h1 className="hero__title">Healthy noodle with spinach leaf</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={zanbariq} alt="" className="hero__img" />
                                  <h1 className="hero__title">Hot spicy fried rice with omelet</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={atala} alt="" className="hero__img" />
                                  <h1 className="hero__title">Spicy instant noodle with</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={shulla} alt="" className="hero__img" />
                                  <h1 className="hero__title">constant noodle special omelette</h1>
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



export default Pizza