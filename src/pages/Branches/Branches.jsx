

import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Branches.css'

function Branches() {

  return (
    <>
     <Navbar/>
      <div className="branches" id="branches">
        <div className="container branches__container">
            <ul className="branches__list">
                <li className="branches__item">
                    <Link to="/Magic" className="branches__link">
                      <div className="link__box">
                        <h1 className="branches__title">MaxWay Magic City</h1>
                         <p className="branches__text">Magic City,ul Babura,174, Tashkent, Uzbekistan  </p>
                         </div>
                         <div className="link__box">
                           <p className="branches__text__name">Часы работы</p>
                           <p className="branches__text">10:00-03:00</p>
                         </div>
                    </Link>
                </li>
                <li className="branches__item">
                    <Link to="/Magic" className="branches__link">
                      <div className="link__box">
                        <h1 className="branches__title">MaxWay Tashkent City</h1>
                         <p className="branches__text">Magic City, Navoiy,26, Tashkent, Uzbekistan  </p>
                         </div>
                         <div className="link__box">
                           <p className="branches__text__name">Часы работы</p>
                           <p className="branches__text">10:00-03:00</p>
                         </div>
                    </Link>
                </li>
                <li className="branches__item">
                    <Link to="/Magic" className="branches__link">
                      <div className="link__box">
                        <h1 className="branches__title">MaxWay Chilanzor City</h1>
                         <p className="branches__text">Magic City, Chilanzar,3, Tashkent, Uzbekistan  </p>
                         </div>
                         <div className="link__box">
                           <p className="branches__text__name">Часы работы</p>
                           <p className="branches__text">10:00-03:00</p>
                         </div>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
      <Footer/>
      
    </>
  )
}

export default Branches