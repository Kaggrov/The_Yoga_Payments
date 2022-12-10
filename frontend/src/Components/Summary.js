import React from 'react'
import check from '../utils/check.png' 
import './summary.css'
import { useNavigate } from 'react-router-dom'
const Summary = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    }
  return (
    <div className='summary__container'>
        <div className='tick__container'><img src={check} alt='success' width="100px" height='100px'></img></div>
        <div style={{textAlign:"center",fontSize:"1.5rem",color:"green",fontWeight:"700"}}>Payment Successful !!</div>
        <div style={{textAlign:"center",fontWeight:'400'}}>Transaction id : 889823345212341</div>
        <div className='details__container'>
            <div className='name'><span>Name : </span><span>Karttekay Grover</span></div>
            <div className='age'><span>Age :</span> <span>21</span></div>
            <div className='date'><span>Start Date :</span> <span>10/12/22</span></div>
            <div className='batch'><span>Batch Timings : </span> <span>6 AM - 7 AM</span></div>
            <div className='mode__payment'><span>Mode Of Payment : </span> <span>Paytm</span></div>
            <div className='amount'><span>Amount Paid :</span><span>500</span></div>
        </div>
        <button className='home__button' onClick={handleSubmit}>Return to Home</button>
        
    </div>
  )
}

export default Summary