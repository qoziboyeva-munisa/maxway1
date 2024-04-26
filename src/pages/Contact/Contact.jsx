import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.css'

function Contact() {

  return (
    <>
    <Navbar/>

    <div className="contact">
        <div className="container contact__container">
            <div className="contact__box">
                <h1 className="contact__title">Телефоны контактных центров</h1>
                <p className="contact__text">Круглосуточно, без выходных</p>
                <ul className="contact__list">
                    <li className="contact__item">
                        <p className="contact__text">Ташкент</p>
                        <a href="#" className="contact__link">+998931487733</a>
                    </li>
                    <li className="contact__item">
                        <p className="contact__text">Наманган</p>
                        <a href="#" className="contact__link">+998993253304</a>
                    </li>
                    <li className="contact__item">
                        <p className="contact__text">Алмалык</p>
                        <a href="#" className="contact__link">+998931487777</a>
                    </li>
                </ul>
            </div>

            <div className="contact__box">
                <h1 className="contact__title">Отдел поддержки клиентов</h1>
                <ul className="contact__list">
                    <li className="contact__item">
                        <p className="contact__text">Электронная почта</p>
                        <a href="#" className="contact__link">rustambek0301@gmail.com</a>
                    </li>
                    <li className="contact__item">
                        <p className="contact__text">Контактный телефон</p>
                        <a href="#" className="contact__link">+998935010770</a>
                    </li>
                </ul>
            </div>

            <div className="contact__box">
                <h1 className="contact__title">Правообладателям</h1>
                <p className="contact__text">По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>
                <ul className="contact__list">
                <li className="contact__item">
                        <p className="contact__text">Электронная почта</p>
                        <a href="#" className="contact__link">rustambek0301@gmail.com</a>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Contact