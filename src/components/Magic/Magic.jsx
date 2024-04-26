
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Magic.css'

function Magic() {

  return (
    <>
     <Navbar/>

     <div className="magic">
        <div className="container magic__container">
            <div className="magic__box">
                <h1 className="magic__title">MaxWay Magic City</h1>
                <p className="magic__text">Адрес: Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
                <p className="magic__text">Часы работы: 10:00-03:00</p>
                <p className="magic__text">Номер телефона:+998 93 148 77 33</p>
                <p className="magic__text">Ориентир: Magic City</p>

                <div className="magic__wrapper">
                    <a href="https://yandex.com/maps/org/max_way/200801115433/?from=mapframe&ll=69.289358%2C41.363060&z=15" className="magic__link">Max Way</a>
                    <p className="magic__text__name">Qahvaxona, oziq-ovqat mahsulotlari ulgurji savdosi, restoran</p>
                    <p className="max__text">Toshkent, Yunusobod tumani, Yunusobod dahasi, 3-mavze, 21</p>
                    <p className="max__text">+998 71 200 56 00</p>
                    <a href="https://maxway.uz/" className="max__link">maxway.uz</a>
                    <div className="magic__ending">
                        <p className="magic__ending__text">Yunusobod</p>
                        <a href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.290054%2C41.364448&mode=routes&rtext=41.365815%2C69.291784~41.363081%2C69.289361&rtt=pd&ruri=~&z=17" className="magic__ending__link">540 m</a>
                    </div>
                    <div className="magic__ending">
                        <p className="magic__ending__text">Shahriston</p>
                        <a className="magic__ending__link" href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.289339%2C41.358601&mode=routes&rtext=41.353958%2C69.288514~41.363081%2C69.289361&rtt=pd&ruri=~&z=15">1.19 m</a>
                    </div>
                    <div className="magic__ending">
                        <p className="magic__ending__text">Turkiston</p>
                        <a href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.291782%2C41.369810&mode=routes&rtext=41.376538%2C69.295264~41.363081%2C69.289361&rtt=pd&ruri=~&z=14" className="magic__ending__link">1.85 m</a>
                    </div>
                </div>
            </div>

             <div className="magic__lakatsiya">
               

               <iframe className="map" src="https://yandex.com/map-widget/v1/-/CCUBbKwFsD" frameborder="1" allowfullscreen="true"></iframe>
             </div>

        </div>
     </div>





     <Footer/>
      
    </>
  )
}

export default Magic
