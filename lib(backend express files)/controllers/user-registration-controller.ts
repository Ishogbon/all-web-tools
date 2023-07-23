import type { Request, Response } from 'express';
import userRegistrar, { type UserRegistrationInfo } from '../models/data-models/orms/user-registrar';

const userRegistrationController = (request: Request, response: Response): void => {
    const REGISTRATION_INFO: UserRegistrationInfo = {
        email: request.body.EMAIL,
        password: request.body.PASSWORD,
        premium: false,
        userAgent: request.headers['user-agent'],
        ipAddress: request.ip,
        ipAddressInfo: { country: 'us' },
        timestamp: new Date()
    };
    userRegistrar(REGISTRATION_INFO)
        .then((userRegistrationSuccess) => {
            if (userRegistrationSuccess) {
                response.end(`User ${REGISTRATION_INFO.email} Registration Successfull`);
            } else {
                response.end(`User ${REGISTRATION_INFO.email} Registration Failed`);
            }
        })
        .catch((error) => {
            console.log(error);
            response.end('some unknown error occurred');
        });
};

export default userRegistrationController;
