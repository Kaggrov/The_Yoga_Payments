import mongoose from "mongoose"

const userModel = mongoose.Schema({
    name: String,
    age : String,
    phoneNo: String,
    startDate: String,
    batch : String
})

export default mongoose.model('user',userModel)