import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyItems from './pages/MyItems/MyItems';
import Register from './pages/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './shared/NavBar/NavBar';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './shared/RequireAuth/RequireAuth';
import EmailVerified from './pages/EmailVerified/EmailVerified';
import Blogs from './pages/Blogs/Blogs';
import Inventory from './pages/Inventory/Inventory';
import Update from './pages/Update/Update';
import PassReset from './pages/PassReset/PassReset';
import Footer from './shared/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Category from './pages/category/Category';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/category' element={
          <RequireAuth>
            <Category />
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Update />
          </RequireAuth>
        }></Route>
        <Route path='/profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }></Route>
        <Route path='/verify' element={<EmailVerified></EmailVerified>}></Route>
        <Route path='/passreset' element={<PassReset></PassReset>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
