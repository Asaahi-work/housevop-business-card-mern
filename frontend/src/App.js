import './App.css';
import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'
import pic3 from './images/pic3.png'
import pic4 from './images/pic4.png'
import pic5 from './images/pic5.png'
import pic6 from './images/pic6.png'
import pic7 from './images/pic7.png'
import pic8 from './images/pic8.png'
import pic9 from './images/pic9.png'
import pic10 from './images/pic10.png'
import pic11 from './images/pic11.png'
import axios from 'axios';
import {useState} from 'react'

function App() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    message: ''
})

  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  const openMenu = () => {
      const doc = document
      const menuOpen = doc.querySelector('.menu')
      const menuClose = doc.querySelector('.close')
      const overlay = doc.querySelector('.overlay')

      menuOpen.addEventListener('click', () => {
        overlay.classList.add('overlay--active')
    })

    menuClose.addEventListener('click', () => {
      overlay.classList.remove('overlay--active')
    })
  }

  const sendMessageHandler = () => {
    async function fetchData() {
        const data = await axios.post('https://localhost:5000/api/send/message', {...form})
        alert('Message sent.')
    }
    fetchData()
  }


  return (
    <div className="App">
      <main>
        <header>
          <div className="header-wrapper"> 
            <nav>
              <p className="nav-logo">HouseVop</p> 
              <ul className="nav-links">
                <li><a href="#">о комплексе</a></li>
                <li><a href="#">Район</a></li>
                <li><a href="#">Каталог квартир</a></li>
                <li><a href="#">Ипотека</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
              <button className="menu header-btn" onClick={openMenu}>Menu</button>
            </nav>
            <p className="header-title">Жилой комплекс <br />
              в историческом центре</p>
            <img src={pic2} className="main-pic transform-pic" /><br />
            <div className="data-container">
              <div className="left">
                <img src={pic3} className="main-pic transform-pic" />
                <p className="address">Наб. реки Фонтанки 10-15</p>
              </div>
              <div className="right">
                <img src={pic4} className="main-pic transform-pic" />  
                <p className="address">8 (812) 123-45-67</p>
              </div>
            </div>
          </div>
        </header>
        <div className="overlay">
          <a className="close">×</a>
          <div className="overlay__content">
            <a href="#">о комплексе</a>
            <a href="#">Район</a>
            <a href="#">Каталог квартир</a>
            <a href="#">Ипотека</a>
            <a href="#">Контакты</a>
          </div>
        </div>
        <div className="main">
          <div className="main-wrapper">
            <div className="cond-container inline">
              <div className="f-block cond-block">
                <img src={pic5} className="main-pic" />
                <p className="cond-text">Рядом исторические <br />
                  парки и скверы</p> 
              </div>
              <div className="s-block cond-block">
                <img src={pic6} className="main-pic" /> 
                <p className="cond-text">Полностью <br />
                  обустроенный</p>
              </div>
              <div className="t-block cond-block">
                <img src={pic7} className="main-pic" /> 
                <p className="cond-text">Полностью <br />
                  обустроенный</p>
              </div>
              <div className="fth-block cond-block">
                <img src={pic8} className="main-pic" /> 
                <p className="cond-text" style={{paddingTop: '26px'}}>6 км <br />
                  велодорожек</p>
              </div>
            </div>                                                    
            <p className="title">Наши квартиры</p>                    
            <div className="flats-block inline-block">                      
              <div className="left-block">                                 
                <img src={pic9} className="main-pic" />            
              </div>
              <div className="right-block">
                <img src={pic10} className="main-pic" /> 
              </div>
            </div>
          </div>
          <div className="feedback-wrapper">
            <div className="feedback-container">
              <div className="feedback-left-block">
                <p className="flb-text">
                  Хотите посмотреть?
                </p>
                <p className="flb-text-s">Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br />
                  вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов <br />
                  на латинице с начала XVI века. В то время некий безымянный <br />
                  печатник создал большую коллекцию размеров и форм шрифтов, <br />
                  используя Lorem Ipsum для распечатки образцов. </p>
              </div>
              <div className="feedback-right-block inline-block">
                <div className="frb-lb">
                  <input className="frb-lb-input" style={{margin: '10px'}}  onChange = {changeHandler} placeholder="Ваше имя" />
                  <p className="frb-lb-text">*Мы никому не передаем ваши данные.<br />
                    И не сохраняем ваш номер в базу.</p>
                </div>
                <div className="frb-rb">
                  <input className="frb-rb-input" style={{margin: '10px'}} onChange = {changeHandler} placeholder="Ваш email" />
                  <p className="frb-lb-text" />
                  <button className="frb-rb-btn" onClick={sendMessageHandler}>Посмотреть район</button>
                </div>
              </div>
            </div>
          </div>
          <div className="main-wrapper">
            <p className="title" style={{paddingBottom: '3rem'}}>Район на карте</p>  
            <div className="map main-pic">
            </div>                  
          </div>
        </div>
        <footer>
          <div className="footer-wrapper">
            <div className="footer-nav"> 
              <div className="footer-nav-links inline">
                <div>
                  <p className="f-nav-logo">HouseVop</p>
                </div>
                <div>
                  <p className="f-nav-text"> О комплексе</p> 
                </div>
                <div>
                  <p className="f-nav-text"> Каталог квартир</p>
                </div>
                <div>
                  <p className="f-nav-text"> E-mail: <span style={{color: '#D4C17F'}}>@housevip.ru</span></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
