import mongoose from 'mongoose';
export const orm = mongoose;
export const init = function() {
    try{
        const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/my_portal-dev";
        console.log("uri",uri)
        mongoose.connect(uri, {   useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true }); // connect to database
    } catch(e){
        throw e
    }
}