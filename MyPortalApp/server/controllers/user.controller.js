
var mongoose = require('mongoose');
require('../models/user.js');
var User = mongoose.model('User');
module.exports = {
    me: getMyUserInfo
}

function getMyUserInfo(req, res){
    var user = new User({username: "trinhho2", email:"hnkt2907@gmail.com2"});

    user.save(function (err, result) {
        if (err) {
            throw err
        }
      res.send(user);
    });
   
}