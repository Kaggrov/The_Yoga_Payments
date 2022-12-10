import React from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import MockPayment from './Components/MockPayment'
import Summary from './Components/Summary'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className='main__container'>
        <Routes>
              <Route exact path='/' element={<><Header /><Home /></>}></Route>
              <Route exact path='/payment' element={< MockPayment />}></Route>
              <Route exact path='/summary' element={<Summary/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App