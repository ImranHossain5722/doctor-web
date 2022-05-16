
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
import Footer from './Shared/Footer/Footer';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import {ToastContainer}from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Shared/RequireAdmin/RequireAdmin';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
        <Route index element={<MyAppointments/>}></Route>
        <Route path='review' element={<MyReview/>}></Route>
        <Route path='users' element={<RequireAdmin><AllUsers/></RequireAdmin>}></Route>

        </Route>
        
        <Route path='review' element={<Reviews></Reviews>}></Route>
        <Route path='contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer/>
    <Footer/>

    </div>
  );
}

export default App;
