import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUserProfileSchema {
    EMAIL: string
    PASSWORD: string
    PREMIUM: boolean
    USER_AGENT: string
    IP_ADDRESS: string
    IP_ADDRESS_INFO: object
    TIMESTAMP: Date
}

const USER_PROFILE_SCHEMA = new Schema<IUserProfileSchema>({
    EMAIL: { type: String, required: true, unique: true },
    PASSWORD: { type: String, required: true },
    PREMIUM: { type: Boolean, default: false },
    USER_AGENT: String,
    IP_ADDRESS: String,
    IP_ADDRESS_INFO: Object,
    TIMESTAMP: { type: Date, default: new Date() }
});
USER_PROFILE_SCHEMA.pre('save', function (next) {
    bcrypt.hash(this.PASSWORD, 10, (error, hash) => {
        if (error == null) {
            this.PASSWORD = hash;
            next();
        } else {
            console.log(error);
        }
    });
});

const USER_PROFILE = mongoose.model<IUserProfileSchema>('UserProfiles', USER_PROFILE_SCHEMA);

export default USER_PROFILE;
