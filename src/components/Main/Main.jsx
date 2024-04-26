


import { Link } from 'react-router-dom'
import './Main.css'

function Main() {

  return (
    <>
  <div className="main">
            <ul className="main__list">
                        <li className="main__item">
                            <Link to="/" className="main__link">Lavash</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Desert" className="main__link">Desert</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Set" className="main__link">Set</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Xaggi" className="main__link">Xaggi</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Burger" className="main__link">Burger</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Pizza" className="main__link">Pizza</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Senvich" className="main__link">Sendvich</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/" className="main__link">Donar</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Xoddog" className="main__link">Xod-Dog</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Free" className="main__link">Free</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/" className="main__link">Drink</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Salad" className="main__link">Salad</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Breand" className="main__link">Brend</Link>
                        </li>
                        <li className="main__item">
                            <Link to="/Sauce" className="main__link">Sauce</Link>
                        </li>
                    </ul>
               
                </div>
    </>
  )
}

export default Main