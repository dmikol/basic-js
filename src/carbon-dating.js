const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

if(typeof(sampleActivity) == 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < MODERN_ACTIVITY){

return result = Math.ceil((Math.log(MODERN_ACTIVITY/(parseFloat(sampleActivity))))/(0.693/HALF_LIFE_PERIOD));

}

return false;
};
