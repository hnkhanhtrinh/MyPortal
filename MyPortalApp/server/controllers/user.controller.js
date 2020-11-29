import { orm as _orm } from "../config/db.js";
import '../models/user.js';
var User = _orm.User;
export const me = getMyUserInfo;

function getMyUserInfo(req, res){
    var user = new User({username: "trinhho3", email:"hnkt2907@gmail.com2"});
    console.log(user)
    user.save(function (err, result) {
        if (err) {
            throw err
        }
      res.send(user);
    });
   
}