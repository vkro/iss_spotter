const { nextISSTimesForMyLocation } = require('./iss');

// const printPassTimes = function(passTimes) {
//   passTimes.forEach((pass) => {
//     date = new Date(0);
//     date.setUTCSeconds(pass['risetime']);
//     console.log(date);
//   })
// };


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
  }
  // success, print out the deets!
  
  printPassTimes(passTimes);
})

module.exports = { printPassTimes }


//////////////////////////////////////////
//  Old manual tests from creating      //
//         fetch functions              //
//////////////////////////////////////////

// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work! ', error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// });

// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP('162.245.144.188', (error, data) => {
//   if (error) {
//     console.log('It didn\'t work! ', error);
//     return;
//   }
//   console.log('It worked! Returned coords: ', data);
// });

// const { fetchISSFlyOverTimes } = require('./iss');

// fetchISSFlyOverTimes({latitude: '49.27670', longitude: '-123.130000'}, (error, passTimes) => {
//   if (error) {
//     console.log('It didn\'t work! ', error);
//     return;
//   }
//   console.log('It worked! Returned coords: ', passTimes);
// });
