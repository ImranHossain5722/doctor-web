
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home' 
import About from '../src/Pages/About/About' 
import Appointment from '../src/Pages/Appointment/Appointment' 
import Reviews from '../src/Pages/Reviews/Reviews' 
import ContactUs from '../src/Pages/ContactUs/ContactUs' 
import Login from '../src/Pages/Login/Login' 
import SignUp from '../src/Pages/SignUp/SignUp' 

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='appointment' element={<Appointment/>}></Route>
        <Route path='review' element={<Reviews/>}></Route>
        <Route path='contact' element={<ContactUs/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
      </Routes>
     

    </div>
  );
}

export default App;
