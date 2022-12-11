import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
mongoose.set('strictQuery', true);
import user  from './userModel.js';



//app configuration
const app = express();
const port = process.env.PORT || 5000


//middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


//db configuration
const mongoURI = process.env.MONGODB_URI


// MongoDB Connection
mongoose.connect(
   mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("MONGODB Connected")
})
.catch((error)=>
    console.log(error)
)

// var db = mongoose.connection;

app.get('/',(req,res)=> res.status(200).send("Hello"));

// app.post('/pp', async(req, res) => {
//     await db.collection('users').insertOne({"name": 'aa'});
//     res.status(200).json("aa");
// })

app.post('/user',(req,res)=>{

    console.log(req.body)
    const name = req.body.name;
    const age = req.body.age;
    const phoneNo = req.body.phoneNo;
    const startDate = req.body.startDate;
    const batch = req.body.batch;

    var regExp = /^[a-z A-Z]*$/ ;

    var varDate = new Date(startDate); //dd-mm-YYYY
    var current = new Date();
    current.setHours(0,0,0,0);

    

    if(age<18 || age>65)
    {
        res.status(401).send("Enter valid age to continue ...")
    }
    if(!regExp.test(name))
    {
        res.status(401).send("Enter valid name to continue ...")
    }
    if(phoneNo.length != 10 || regExp.test(phoneNo) )
    {
        res.status(401).send("Enter valid phone number to continue ...")
    }
    if(varDate < current)
    {
        res.status(401).send("Enter valid Batch Start date to conitnue ....");
    }
    if(batch != "1" && batch!="2"&& batch!="3" && batch!="4")
    {
        res.status(401).send("Enter valid Batch no. to continiue ...")
    }
    else{

        user.findOne({phoneNo:phoneNo}).then((found)=>{
            if(found)
            {       
                    console.log(found);
                    let Old_Cutomer_startDate = new Date(found.startDate.toString());
                    let to_update = startDate
                    let latest_Date  = new Date(startDate);

                    let No_of_Days = (Number(latest_Date.getTime()) - Number(Old_Cutomer_startDate.getTime()) )/(86400000);

                    console.log(No_of_Days);

                    (No_of_Days > 30) ? (user.updateOne({phoneNo:phoneNo},{$set:{startDate:to_update}}).then(()=>{
                        res.status(200).send({
                            result:"New Batch Date is Updated ...",
                            phoneNo:phoneNo
                        });
                    })
                    .catch((error)=>{
                        res.status(400).send(error);
                    })) : (res.status(201).send("You can't enroll a Batch before 30 Days of Previous batch selected ..."));

            }
            else
            {
                const PersonalDetails = new user({
                    "name":name,
                    "age" : age,
                    "phoneNo" : phoneNo,
                    "startDate" : startDate,
                    "batch" : batch
                })
        
                PersonalDetails.save()
                .then(()=>{
                    res.status(200).send({
                        result:"Data has been stored Successfully",
                        phoneNo:phoneNo
                    })
                })
                .catch((error)=>{
                    res.status(400).send(error);
                })
            }
        })


    
    }

})

app.post('/details', async(req,res)=>{
    const search_key = req.body.phoneNo;

    const userDetails = await user.findOne({phoneNo:search_key});

    res.status(200).send(userDetails);
})

//listen
app.listen(port,()=>console.log('listening'))