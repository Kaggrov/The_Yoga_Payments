import React from 'react'
import './MockPayment.css'
import bhim from '../utils/bhim.png'
import phonepe from '../utils/phonepe.png'
import paytm from '../utils/paytm.png'
import gpay from '../utils/gpay.png'
import { useNavigate } from 'react-router-dom';
import axios from '../axios'

const MockPayment = ({current_user , setUserDetails}) => {

    const navigate = useNavigate();
    const upi = ['Bhim UPI','PhonePe','PayTM','GPay']
    let mode;

    console.log(current_user.phoneNo)

    const CompletePayment = async () => {

        await axios.post('/details',{
            phoneNo:current_user.phoneNo
        }).then(async (res)=>{
            await setUserDetails({
                name:res.data.name,
                age:res.data.age,
                phoneNo:res.data.phoneNo,
                startDate:res.data.startDate,
                batch:res.data.batch,
                mode:mode
            })
            navigate('/summary')
        })
        .catch((error)=>{
            console.log(error);
        })
            
    }

    const handlePaymentMethod = (e,key) => {
        e.preventDefault();
        console.log(key)
        mode =  upi[key-1];
        console.log(document.getElementsByClassName("upi__app"))
        document.getElementsByClassName("upi__app")[key-1].classList.add("upi__app__active");
        document.getElementsByClassName("upi__app")[key-1].classList.remove("upi__app")
    }



  return (
    <div className='payment__container'>
        <div className='header_'>
            <div className='element1'>UPI/BHIM</div>
            <div className='element2'>Change</div>
        </div>
        <div className='select__app'>Select your UPI app</div>
        <div className='row1'>
            <div className='upi__app'><img src={bhim} alt="bhim" width="250rem" style={{textAlign:"center"}} onClick={(e,key=1)=> handlePaymentMethod(e,key)}></img></div>
            <div className='upi__app'><img src={phonepe} alt="phonpe" width="250rem"onClick={(e,key=2)=> handlePaymentMethod(e,key)} ></img></div>
        </div>
        <div className='row1'>
            <div className='upi__app'><img src={paytm} alt="paytm" width="240rem" height="60rem" onClick={(e,key=3)=> handlePaymentMethod(e,key)}></img></div>
            <div className='upi__app'><img src={gpay} alt="gpay" width="250rem" height='60rem' onClick={(e,key=4)=> handlePaymentMethod(e,key)}></img></div>
        </div>
        <button className='pay__button' onClick={CompletePayment}>Pay Now</button>
    </div>
  )
}

export default MockPayment