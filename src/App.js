import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import PageNotFund from './Pages/Shared/PageNotFund';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/service/:serviceId'element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='*' element={<PageNotFund></PageNotFund>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
