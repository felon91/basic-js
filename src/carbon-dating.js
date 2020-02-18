const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   if (typeof(sampleActivity) !== 'string') return false;

   const numSampleActivity = parseFloat(sampleActivity);

   return (numSampleActivity > 0 && numSampleActivity < MODERN_ACTIVITY)
       ? Math.ceil(Math.log(MODERN_ACTIVITY / numSampleActivity) * (HALF_LIFE_PERIOD / 0.693))
       : false;
};
