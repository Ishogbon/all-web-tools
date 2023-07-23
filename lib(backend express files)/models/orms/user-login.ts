import bcrypt from 'bcrypt';
import { type Types } from 'mongoose';

import USER_PROFILE from '../user-profile-model';

export interface UserLoginInfo {
    email: string
    password: string
}

async function _authenticateViaPassword (entryPassword: string, storedPassword: string | undefined): Promise<boolean> {
    if (typeof storedPassword === 'string') {
        return await bcrypt.compare(entryPassword, storedPassword)
            .then((same) => {
                return same;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    }
    return false;
}

export const userLogin = async (userInfo: UserLoginInfo): Promise<Types.ObjectId | false> => {
    return await (async () => {
        try {
            const user = await USER_PROFILE.findOne({ EMAIL: userInfo.email });
            if (user != null) {
                if (await _authenticateViaPassword(userInfo.password, user?.PASSWORD)) {
                    console.log(`User with email: ${userInfo.email} login was successfull.`);
                    return user._id;
                } else {
                    // If password was invalid
                    return false;
                }
            } else {
                // User does not exist
                console.log('User does not exist');
                return false;
            }
        } catch (error) {
            console.log(`Something went wrong while registering User with email: ${userInfo.email}.`);
            console.log(error);
            return false;
        };
    })();
};
export default userLogin;
