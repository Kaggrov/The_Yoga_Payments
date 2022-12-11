import React from 'react'
import check from '../utils/check.png' 
import './summary.css'
import { useNavigate } from 'react-router-dom'
const Summary = ({userDetails}) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    }
    console.log(userDetails)
    const Batch = ['6AM - 7AM', '7AM - 8AM','8AM - 9AM','5AM - 6AM']
  return (
    <div className='summary__container'>
        <div className='tick__container'><img src={check} alt='success' width="100px" height='100px'></img></div>
        <div style={{textAlign:"center",fontSize:"1.5rem",color:"green",fontWeight:"700"}}>Payment Successful !!</div>
        <div style={{textAlign:"center",fontWeight:'400'}}>Transaction id : 889823345212341</div>
        <div className='details__container'>
            <div className='name'><span>Name : </span><span>{userDetails.name}</span></div>
            <div className='age'><span>Age :</span> <span>{userDetails.age}</span></div>
            <div className='date'><span>Start Date :</span> <span>{userDetails.startDate}</span></div>
            <div className='batch'><span>Batch Timings : </span> <span>{Batch[userDetails.batch-1]}</span></div>
            <div className='mode__payment'><span>Mode Of Payment : </span> <span>{userDetails.mode}</span></div>
            <div className='amount'><span>Amount Paid :</span><span>500 Rs</span></div>
        </div>
        <button className='home__button' onClick={handleSubmit}>Return to Home</button>
        
    </div>
  )
}

export default Summary