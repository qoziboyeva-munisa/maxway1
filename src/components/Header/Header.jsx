
import '.Header.css'




function Header() {

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

export default Header