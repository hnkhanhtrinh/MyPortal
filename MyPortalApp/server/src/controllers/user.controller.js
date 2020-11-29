export const createUser = _createUser;
export const me = _getMyUserInfo;
function _createUser(req, res){

}
function _getMyUserInfo(req, res){
    res.send("Hello me!")
}