'use strict';

const add = require('lodash.add');
const divide = require('lodash.divide');
const multiply = require('lodash.multiply');
const subtract = require('lodash.subtract');

module.exports.hello = async (event) => {
  const a = parseInt(event.queryStringParameters.a, 10);
  const b = parseInt(event.queryStringParameters.b, 10);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        a,
        b,
        add: add(a, b),
        divide: divide(a, b),
        multiply: multiply(a, b),
        subtract: subtract(a, b),
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
