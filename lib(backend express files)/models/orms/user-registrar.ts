import USER_PROFILE from '../user-profile-model';

export interface UserRegistrationInfo {
    email: string
    password: string
    premium: boolean
    userAgent: string | undefined
    ipAddress: string
    ipAddressInfo: object
    timestamp: Date
}
const userRegistration = async (userInfo: UserRegistrationInfo): Promise<boolean> => {
    return await USER_PROFILE.create({
        EMAIL: userInfo.email,
        PASSWORD: userInfo.password,
        PREMIUM: userInfo.premium,
        USER_AGENT: userInfo.userAgent,
        IP_ADDRESS: userInfo.ipAddress,
        IP_ADDRESS_INFO: userInfo.ipAddressInfo,
        TIMESTAMP: userInfo.timestamp
    })
        .then(() => {
            return true;
        })
        .catch((error: Error) => {
            console.log(error);
            return false;
        });
};
export default userRegistration;
