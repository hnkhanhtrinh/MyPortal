import mongoose from 'mongoose';
const url = process.env.MONGODB_URI;
console.log(url)
export const orm = mongoose;
export const init = function() {
    try{
        mongoose.connect(url || "mongodb://localhost:27017/my_portal", {   useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true }); // connect to database
    } catch(e){
        throw e
    }
}