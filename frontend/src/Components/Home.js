import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import axios from'../axios';
import { NotificationManager } from 'react-notifications';
import { Audio } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Home = ({setCurrent_user}) => {

  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [invalidAge,setInvalidAge] = useState("");
  const [startDate,setStartDate] = useState();
  const [batch,setBatch] = useState("1");
  const [phoneNo,setPhoneNo]  = useState("");

  const handleAge = (event) => {
    setAge(event.target.value);

    if(event.target.value<18 || event.target.value > 65)
      setInvalidAge("*Age must be between 18 & 65");
    if(event.target.value > 18 && event.target.value < 65)
      setInvalidAge("")
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      // console.log(phoneNo)

      var date = new Date(startDate);
      let finalDate;
      if (!isNaN(date.getTime())) {
          finalDate = (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear());
      }
      await axios.post('/user',{
        name:name,
        age:age,
        phoneNo:phoneNo,
        startDate:finalDate.toString(),
        batch:batch,
      })
      .then(async (res)=>{
        NotificationManager.success('', 'Date has been stored successfully !!',3000);
        setTimeout(() => {
          
        }, 3000);
          await setCurrent_user({phoneNo : res.data.phoneNo})
          navigate('/payment')
          
      })
      .catch((error)=>{
        NotificationManager.error('', 'Error in storing Data !!',3000);
        setTimeout(() => {
          
        }, 3000);
          console.log(error)
      })
      // console.log(finalDate)

      
  }


  return (
    <div className='form__container'>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
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
          type="string"
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
            <option value="1" style={{backgroundColor:"rgb(226, 222, 222)"}}>6 AM - 7 AM</option>
            <option value="2" style={{backgroundColor:"rgb(226, 222, 222)"}}>7 AM - 8 AM</option>
            <option value="3" style={{backgroundColor:"rgb(226, 222, 222)"}}>8 AM - 9 AM</option>
            <option value="4" style={{backgroundColor:"rgb(226, 222, 222)"}}>5 PM - 6 PM</option>
          </select>

          <button className='form__button' onClick={handleSubmit}>Proceed to Payment</button>
      </form>

    </div>
  )
}

export default Home