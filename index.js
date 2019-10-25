const { fetchMyIP } = require('./iss');
const request = require('request');



fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn\'t work! ', error);
    return;
  }
  console.log('It worked! Returned IP: ', ip);
});