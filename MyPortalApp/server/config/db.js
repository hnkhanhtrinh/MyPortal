var mongoose = require('mongoose');
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/my_portal-dev';
console.log(url)
module.exports = {
    orm: mongoose,
    init: init
};

function init() {
    try{
    mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }); // connect to database
    } catch(e){
        throw e
    }
}