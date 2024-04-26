
import './Navbar.css'
import savat from '../../assets/image/savat.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {

  const [modal , setopen] = useState(false)

    const onOpen =() =>{
    setopen(true)
    }
    const onclose =()=>{
      setopen(false)
    }

  return (
  <>
      <div className="navbar">
        <div className="container navbar__container">

        <button onClick={onOpen} id="navbtn" class="navbar__btn"><i class="fa-solid fa-bars"></i></button>
       
        <ul className="navbar__list">
            <li className="navbar__item">
            <Link className="logo__link" to="/">SFood</Link>
            </li>
            <div className="navbar__box">
            <li className="navbar__item">
            <Link class="navbar__link" to="/">Главная</Link>
            </li>
            <li className="navbar__item">
            <Link class="navbar__link" to="/Branches">Филиалы</Link>
            </li>
            <li className="navbar__item">
            <Link class="navbar__link" to="/About">О нас</Link>
            </li>
            <li className="navbar__item">
            <Link class="navbar__link" to="/Contact">кантакты</Link>
            </li>
          </div>
            <li className="navbar__item">
            <Link class="navbar__link__korzinka" to="#"><img className='navbar__img' src={savat} alt="" /></Link>
            </li>
            <li className="navbar__item">
            <Link class="navbar__link__name" to="#">Войти</Link>
            </li>
          
        </ul>
       
        </div>
      </div>

    {
      modal?
      <div className="modal" >
      <div className="container modal__container">
      <ul className="modal__list">
          <li className="modal__item">
          <Link class="modal__link" to="/">Главная</Link>
          </li>
          <li className="modal__item">
          <Link class="modal__link" to="/Branches">Филиалы</Link>
          </li>
          <li className="modal__item">
          <Link class="modal__link" to="/About">О нас</Link>
          </li>
          <li className="modal__item">
          <Link class="modal__link" to="/Contact">кантакты</Link>
          </li>
      </ul>
      <button id="modalbtn" onClick={onclose} className="modal__btn">x</button>
      </div>
    </div>:''
    }
  


  </>
  )
}






export default Navbar