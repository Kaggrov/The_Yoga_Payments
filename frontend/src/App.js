import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import MockPayment from './Components/MockPayment'
import Summary from './Components/Summary'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {

  const [current_user,setCurrent_user] = useState({});
  const [userDetails,setUserDetails] = useState({});

  return (
    <Router>
      <div className='main__container'>
        <Routes>
              <Route exact path='/' element={<><Header /><Home  setCurrent_user = {setCurrent_user}/></>}></Route>
              <Route exact path='/payment' element={< MockPayment current_user={current_user}  setUserDetails= {setUserDetails}/>}></Route>
              <Route exact path='/summary' element={<Summary userDetails={userDetails}/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App