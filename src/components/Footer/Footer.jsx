

import './Footer.css'
import telegramm from '../../assets/image/telegramm.png'
import istagram from '../../assets/image/istagram.png'
import youtube from '../../assets/image/youtube.png'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <>
 
      <div className="footer">
        <div className="container footer__container">
            <div className="footer__wrapper">
            <ul className="footer__list">
                <li className="footer__item">
                    <Link onClick={()=> window.scrollTo({top:0})}  to="/" className="footer__link"> SFood</Link>
                </li>
                <li className="footer__item">
                    <Link onClick={()=> window.scrollTo({top:0})}  to="/" className="footer__link__name"> Главная</Link>
                </li>
                <li className="footer__item">
                    <Link onClick={()=> window.scrollTo({top:0})}  to="/Branches" className="footer__link__name"> Филиалы</Link>
                </li>
                <li className="footer__item">
                    <Link onClick={()=> window.scrollTo({top:0})} to="/About" className="footer__link__name"> О нас</Link>
                </li>
                <li className="footer__item">
                    <Link onClick={()=> window.scrollTo({top:0})}  to="/Contact" className="footer__link__name"> кантакты</Link>
                </li>
            </ul>
            <ul className="footer__list__name">
                <h1 className="footer__title">Присоединяйтесь к нам</h1>
                <div className='footer__icon'>
                <li className="footer__item__name">
                    <a href="https://t.me/jhghjhjj" className="footer__linkto" target='_blank'>
                       <img src={telegramm} alt="" className="footer__img" />
                    </a>
                </li>
                <li className="footer__item__name">
                    <a href="https://www.instagram.com/" className="footer__linkto">
                    <img src={istagram} alt="" className="footer__img" />  
                    </a>
                </li>
                <li className="footer__item__name">
                    <a href="https://www.youtube.com/" className="footer__linkto">
                    <img src={youtube} alt="" className="footer__img" /> 
                    </a>
                </li>
                </div>
            </ul>
            <div className="footer__box">
                <h2 className="footer__title">Заказывайте по номеру</h2>
                <a href="#" className="footer__link__name">+998931487733</a>
            </div>
        </div>

        <hr />
        <div className='footer__ending'>
            <ul className="ending__list">
                <li className='ending__item'>
                    <a href="#" className="ending__link">© 2020–2022, ООО «IT-TIME», официальный сайт</a>
                </li>
                <li className='ending__item'>
                    <a href="#" className="ending__link">Developed by Rustambek</a>
                </li>
            </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer