/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/20/2020
 *
 */

// dependencies
require("dotenv").config();

// module scaffolding
const environments = {};

// staging environment
environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey:"aaaaaaaaaaaaaaa",
    maxChecks:5,
    twilio: {
        fromPhone: '+16067311503',
        accountSid: 'ACd8844573a44baab57c723fd0143b8f91',
        authToken: '386893a23b1bfcf1195966e7b8b99565',
    },
};

// production environment
environments.production = {
    port: 5000,
    envName: 'production',
    secretKey:"bbbbbbbbbbbbb",
    maxChecks:5,
    twilio: {
        fromPhone: '+16067311503',
        accountSid: 'ACd8844573a44baab57c723fd0143b8f91',
        authToken: '386893a23b1bfcf1195966e7b8b99565',
    },
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;