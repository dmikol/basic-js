module.exports = function getSeason(Date) {

if(arguments.length == 0){
  return 'Unable to determine the time of year!';
}
if(Date.getMilliseconds() == 0){
  throw new Error;
}
if(Date.getMonth() == 0 || Date.getMonth() == 1 || Date.getMonth() == 11){
  return 'winter';
}
if(Date.getMonth() == 2 || Date.getMonth() == 3 || Date.getMonth() == 4){
  return 'spring';
}
if(Date.getMonth() == 5 || Date.getMonth() == 6 || Date.getMonth() == 7){
  return 'summer';
}
if(Date.getMonth() == 8 || Date.getMonth() == 9 || Date.getMonth() == 10){
  return 'autumn';
}
};
