module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Error');

  let month = '';

  if (date.getMonth) {
    month =  date.getMonth() + 1;
  } else {
    throw new Error('error');
  }
  if (month <= 2 || month === 12) return 'winter';
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
};
