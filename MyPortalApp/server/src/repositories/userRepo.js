import { User } from '../models/user.model.js'
// export const create = _create

// function _create(userDTO) {
//    return new Promise((resolve, reject) => {
//         try {
//             var user = new User(userDTO);
//             user.save();
//             resolve(user);
//         } catch (e) {
//             reject(e);
//         }
//     })
// }
class UserRepo{
    /**
     * @param {Database} db
     */
    constructor(db){
        this._db = db;
    }
}