
import './App.css'
import Branches from './pages/Branches/Branches'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import {Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Desert from './components/Desert/Desert'
import Set from './components/Set/Set'
import Xaggi from './components/Xaggi/Xaggi'
import Senvich from './components/Senvich/Senvich'
import Salad from './components/Salad/Salad'
import Burger from './components/Burger/Burger'
import Xoddog from './components/Xoddog/Xoddog'
import Breand from './components/Breand/Breand'
import Pizza from './components/Pizza/Pizza'
import Free from './components/Free/Free'
import Sauce from './components/Sauce/Sauce'
import Magic from './components/Magic/Magic'





function App() {

  return (
    <>
 
      <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/Branches" element={<Branches/> } />
       <Route path="/About" element={<About/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Desert" element={<Desert/>}/>
       <Route path="/Set" element ={<Set/>}/>
       <Route path="/Xaggi" element={<Xaggi/>}/>
       <Route path="/Senvich" element={<Senvich/>}/>
       <Route path="/Salad" element={<Salad/>}/>
       <Route path="/Burger" element={<Burger/>}/>
       <Route path="/Xoddog" element={<Xoddog/>}/>
       <Route path="/Breand" element={<Breand/>}/>
       <Route path="/Pizza" element={<Pizza/>}/>
       <Route path="/Free" element={<Free/>}/>
       <Route path="/Sauce" element ={<Sauce/>}/>
       <Route path="/Magic" element ={<Magic/>}/>
       
     </Routes> 
    </>
  )
}

export default App
