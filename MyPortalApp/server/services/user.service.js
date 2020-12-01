import * as UserDao from '../dao/user.dao.js';
export const createUser = _createUser;
export const getUserById = _getUserById;
export const getUserByCondition = _getUserByCondition;
async function _createUser(user){
  return await UserDao.create(user);
}
async function _getUserById(id){
  return await UserDao.findOneById(id);
}
async function _getUserByCondition(condition){
  return await UserDao.findOneByCondition(condition);
}