import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [invalidAge,setInvalidAge] = useState("");
  const [startDate,setStartDate] = useState(new Date());
  const [batch,setBatch] = useState();
  const [phoneNo,setPhoneNo]  = useState();

  const handleAge = (event) => {
    setAge(event.target.value);

    if(event.target.value<18 || event.target.value > 65)
      setInvalidAge("*Age must be between 18 & 65");
    if(event.target.value > 18 && event.target.value < 65)
      setInvalidAge("")
  }

  const handleSubmit = () => {
      navigate('/payment')
  }


  return (
    <div className='form__container'>
      <form className='form'>
        <div style={{margin:"10px" ,marginLeft:"0", fontWeight:"500",fontSize:"1.5rem",backgroundColor:"#5F6F94"}}>Enter your Name :</div>
        <input 
          type="text"
          placeholder='Enter the Name...'
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          className='input__name'
        />
        <div style={{margin:"10px" ,marginLeft:"0", fontWeight:"500",fontSize:"1.5rem",backgroundColor:"#5F6F94"}}>Enter your Age :  <span style={{fontSize:"18px",fontWeight:"500",color:"#ca431a",backgroundColor:"#5F6F94"}}>{invalidAge}</span></div>
        <input type="string" 
          placeholder="Age"
          value={age}
          className='input__age'
          onChange={handleAge}

          />
        <div style={{margin:"10px" ,marginLeft:"0", fontWeight:"500",fontSize:"1.5rem",backgroundColor:"#5F6F94"}}>Enter your Phone Number :</div>
        <input 
          type="text"
          placeholder='Enter the Phone Number...'
          value={phoneNo}
          onChange={(e)=>{setPhoneNo(e.target.value)}}
          className='input__phone'
        />
          <div style={{margin:"10px" ,marginLeft:"0", fontWeight:"500",fontSize:"1.5rem",backgroundColor:"#5F6F94"}}>Enter Starting Date of Classes :</div>
          <input type='date' 
            placeholder="Starting date"
            value={startDate}
            onChange={((e)=>setStartDate(e.target.value))}
            className="input__date"
          />
          <div style={{margin:"10px" ,marginLeft:"0", fontWeight:"500",fontSize:"1.5rem",backgroundColor:"#5F6F94"}}>Select your time Slot :</div>
          <select
            className='input__batch'
            onChange={(e)=>setBatch(e.target.value)}
          >
            <option value="6-7" style={{backgroundColor:"rgb(226, 222, 222)"}}>6 AM - 7 AM</option>
            <option value="7-8" style={{backgroundColor:"rgb(226, 222, 222)"}}>7 AM - 8 AM</option>
            <option value="8-9" style={{backgroundColor:"rgb(226, 222, 222)"}}>8 AM - 9 AM</option>
            <option value="5-6" style={{backgroundColor:"rgb(226, 222, 222)"}}>5 PM - 6 PM</option>
          </select>

          <button className='form__button' onClick={handleSubmit}>Proceed to Payment</button>
      </form>

    </div>
  )
}

export default Home