import express from 'express';
import mongoose, { type Types } from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import cors from 'cors';

import * as SERVER_CONSTANTS from '../etc(contains configuration files)/constants/constants/server';
import userRegistrationController from './controllers/user-registration-controller';
import userLoginController from './controllers/user-login-controller';
import { calculateNumberOfPercentController, calculateNumberOnNumberAsPercentController, calculatePercentOfNumberController, calculatePercentageChangeController, percentageApplicationToNumberController, percentageToDecimalController, percentageToFractionController } from './controllers/system-controllers/calculator-controllers/math/percentages-calculator-controllers';
import { findNextPrimeNumberController, findPreviousPrimeNumberController, generatePrimeNumbersController, primeNumberVerificationController } from './controllers/system-controllers/calculator-controllers/math/prime-numbers-calculator-controllers';
import { addingMachineController } from './controllers/system-controllers/calculator-controllers/finance/adding-machine-calculator-controller';
import { calculateAbsoluteDifferenceController } from './controllers/system-controllers/calculator-controllers/algebra/absolute-difference-calculator-controller';

const _mongodbClient = mongoose;
_mongodbClient.connect('mongodb://0.0.0.0/' + SERVER_CONSTANTS.SITE_DATABASE_MAIN)
    .then(() => {
        console.log('Database was successfully connected to');
    })
    .catch((error) => {
        console.log(error);
    });

const expressApp = express();

// Sets express to use location for public assets
expressApp.use(express.static(path.join(__dirname, '\\srv(like public, contains public files)')));

// Sets express to use middleware to parse requests body
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));

// Extend the Express Session module interface to include an object for the User Session information
declare module 'express-session' {
    interface Session {
        userId: Types.ObjectId
    }
}

// Enable CORS for all routes
expressApp.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

// Sets express to use Sessions &&/|| Cookies
expressApp.use(expressSession({
    secret: SERVER_CONSTANTS.EXPRESS_SESSION_SECRET_KEYPHRASE
}));

// Port number is my DOB year + month + day
expressApp.listen(SERVER_CONSTANTS.EXPRESS_HTTP_PORT, () => {
    console.log('Server is now active on port 2015');
});

// Auth endpoints
expressApp.post('/api/v1/register-user', userRegistrationController);
expressApp.post('/api/v1/login-user', userLoginController);

// Calculators endpoints

// Math Calculators endpoints
// Percentage Calculators endpoints
expressApp.get('/api/v1/calculator/math/percentage-of-number', calculatePercentOfNumberController);
expressApp.get('/api/v1/calculator/math/number-on-number-as-percentage', calculateNumberOnNumberAsPercentController);
expressApp.get('/api/v1/calculator/math/number-of-percentage', calculateNumberOfPercentController);
expressApp.get('/api/v1/calculator/math/percentage-change-in-numbers', calculatePercentageChangeController);
expressApp.get('/api/v1/calculator/math/apply-percentage-change-to-number', percentageApplicationToNumberController);
expressApp.get('/api/v1/calculator/math/percentage-to-fraction', percentageToFractionController);
expressApp.get('/api/v1/calculator/math/percentage-to-decimal', percentageToDecimalController);

// Prime Numbers Calculators endpoints
expressApp.get('/api/v1/calculator/math/verify-prime-number', primeNumberVerificationController);
expressApp.get('/api/v1/calculator/math/generate-prime-numbers', generatePrimeNumbersController);
expressApp.get('/api/v1/calculator/math/find-previous-prime-number', findPreviousPrimeNumberController);
expressApp.get('/api/v1/calculator/math/find-next-prime-number', findNextPrimeNumberController);

// Adding Machine Calculator endpoints
expressApp.post('/api/v1/calculator/finance/adding-machine', addingMachineController);

// Absolute Difference Calculator endpoints
expressApp.get('/api/v1/calculator/algebra/absolute-difference', calculateAbsoluteDifferenceController);
