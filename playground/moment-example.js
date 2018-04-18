var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12: 00am -> 0
// January 1st 1970 @ 12: 01am -> 60

var now = moment();
console.log('Current timestamp', now.unix());
// unix() convert to the number of seconds
// moment() => get current moment
// moment => object 


var timestamp = 1519111648;
var currentMoment = moment.unix(timestamp);
console.log('Current moment: ' , currentMoment.format('MM YY Do @ HH A h:mm:a'));

// January 3rd, 2016 @ 12:13 AM

console.log('Current with format: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));