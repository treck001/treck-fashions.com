import mongoose from "mongoose";

const designSchema = mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    }
})


export default mongoose.model('Design',designSchema);