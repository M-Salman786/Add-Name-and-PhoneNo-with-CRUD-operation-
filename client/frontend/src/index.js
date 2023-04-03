import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddPhone from './AddPhone';
import ListPhone from './ListPhone';
import PhoneBook from './PhoneBook';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UpdatePhone from './UpdatePhone';
// import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<App/>} ></Route>
        <Route path='/add-phone' element ={<AddPhone/>} ></Route>
        <Route path='/list-phone' element ={<ListPhone/>} ></Route>
        <Route path='/phone-book' element ={<PhoneBook/>} ></Route>
        <Route path='/update-phone/:_id' element ={<UpdatePhone/>} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
