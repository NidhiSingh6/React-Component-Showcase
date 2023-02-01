import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import AddComponent from './Components/AddComponent';
import View from './Components/View';
import ManageComponent from './Components/ManageComponent';



import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import { Toaster } from 'react-hot-toast';
import ListComponent from './Components/ListComponent';


function App() {
  
  return (
    <div>
      <Toaster position='top-right' />
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Register />} path="register" />
            <Route element={<AddComponent />} path="add" />
            <Route element={<View />} path="view" />
            <Route element={<ListComponent />} path="list" />
            <Route element={<ManageComponent />} path="manage" />
            


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;