import mongoose from "mongoose";

const Schema= mongoose.Schema

const schema= new Schema ({
    name:{type:String,required:true},
    phone:{type:String,required:true}
})

export default mongoose.model('add', schema)