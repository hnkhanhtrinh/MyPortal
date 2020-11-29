import { orm as _orm } from "../config/db.js";
var orm = _orm, Schema = orm.Schema;
var UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        default: '',
    },
    lastName: {
        type: String,
        trim: true,
        default: '',
    },
    displayName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        index: true,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        default: ''
    },
    profileImageURL: {
        type: String,
        default: '/img/profile/no-avatar.png'
    },
    creationDate: {
        type: 'Date', default: Date.now
    },
    roles: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user'],
        required: true
    }

});

UserSchema.index({ "username": 1, "email": 1 }, { unique: true })
export default orm.model('User', UserSchema);