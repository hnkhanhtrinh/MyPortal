import { orm as _orm } from "../config/db.js";
import '../models/user.js';
var User = _orm.model('User');
export const create = _createUser;
export const findOneById = _findOneById;
export const findOneByCondition = _findOneByCondition
async function _createUser(user) {
    const u = new User(user);
    await u.save();
}
async function  _findOneById(id) {
    await User.findById(id).exec();
}
async function _findOneByCondition(condition) {
    const user = await User.findOne(condition).exec();
    return user;
}