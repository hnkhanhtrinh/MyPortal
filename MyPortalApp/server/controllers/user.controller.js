import * as UserService from '../services/user.service.js';
export const me = getMyUserInfo;
export const signUp = _signUp;

async function _signUp(req, res){
    var user = {
        email: "hnkt2907@gmail.com",
        firstName: "Trinh",
        lastName: "Ho",
        role : ["user"],
        password : "123456",
        username : "trinhhovn"
    }
   await UserService.createUser(user)
   res.send("success");

}
async function getMyUserInfo(req, res){
   const email = req.query.email;
   const username = req.query.username;
   console.log(email)
   const user = await UserService.getUserByCondition({"username": username});
   console.log(user)
   res.send(user);
}
