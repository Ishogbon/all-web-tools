import type { Request, Response } from 'express';
import userLogin, { type UserLoginInfo } from '../models/data-models/orms/user-login';

const userLoginController = (request: Request, response: Response): void => {
    const LOGIN_INFO: UserLoginInfo = {
        email: request.body.EMAIL,
        password: request.body.PASSWORD
    };
    userLogin(LOGIN_INFO)
        .then((userLoginSuccess) => {
            if (userLoginSuccess !== false) {
                request.session.userId = userLoginSuccess;
                response.end(`User ${LOGIN_INFO.email} Login Successfull`);
            } else {
                response.end(`User ${LOGIN_INFO.email} Login Failed`);
            }
        })
        .catch((error) => {
            console.log(error);
            response.end('some unknown error occurred');
        });
};

export default userLoginController;
