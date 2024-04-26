
import './Desert.css'
import Navbar from '../../components/Navbar/Navbar'
import lavash from '../../assets/image/lavash.jpg'
import hoddok from '../../assets/image/hoddok.jpg'
import burger from '../../assets/image/burger.jpg'
import pirok from '../../assets/image/pirok.jpg'
import gilos from '../../assets/image/gilos.jpg'
import Footer from '../../components/Footer/Footer'
import qulupnay from '../../assets/image/qulupnay.jpg'
import malina from '../../assets/image/malina.jpg'
import yongoq from '../../assets/image/yongoq.jpg'
import Main from '../../components/Main/Main'

function Desert() {

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
                                <img src={qulupnay} alt="" className="hero__img" />
                                  <h1 className="hero__title">x owls available</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={pirok} alt="" className="hero__img" />
                                  <h1 className="hero__title">Salted Pasta with mushroom sauce</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">5.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={gilos} alt="" className="hero__img" />
                                  <h1 className="hero__title">Beef dumpling in hot soup</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">3.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={malina} alt="" className="hero__img" />
                                  <h1 className="hero__title">Healthy noodle with spinach leaf</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">2.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={yongoq} alt="" className="hero__img" />
                                  <h1 className="hero__title">Hot spicy fried rice with omelet</h1>
                                  <p className="hero__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                                  <div className="hero__box">
                                    <p className="hero__text__name">9.29 сум</p>
                                    <button className='hero__btn'>Заказать</button>
                                  </div>
                            </li>
                            <li className="hero__item">
                                <img src={pirok} alt="" className="hero__img" />
                                  <h1 className="hero__title">Salted Pasta with mushroom sauce</h1>
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



export default Desert