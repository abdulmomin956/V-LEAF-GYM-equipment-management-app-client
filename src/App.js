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
        <Route path='/verify' element={<EmailVerified></EmailVerified>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
