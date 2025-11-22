import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Posts from './pages/Posts';
import Login from './pages/login/login';


function App() {

  return (
 
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Posts/>}></Route>
        <Route path='/Posts' element={<Posts/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
