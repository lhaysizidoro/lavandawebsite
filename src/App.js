import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components /Footer/Footer';
import Navbar from './Components /Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSingUp';


function App() {
  return(
   <div className='App'>
     <BrowserRouter>
     
     <Navbar/>
     <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/faciais' element={<ShopCategory category="faciais"/>}/>
       <Route path='/corporais' element={<ShopCategory category="corporais"/>}/>
       <Route path='/sabonetes' element={<ShopCategory category="sabonetes"/>}/>
       <Route path='/kits' element={<ShopCategory category="kits"/>}/>
       <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='cart' element={<Cart/>}/>
 
       <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
 
     </BrowserRouter>
   </div>
  )
 }
 
 export default App;
