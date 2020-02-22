module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('error');
  const options = {
    one: '--discard-next',
    two: '--discard-prev',
    three: '--double-next',
    four: '--double-prev',
  };

  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case options.one: {
        i++;
        break;
      }
      case options.two: {
        if (i !== 0) resultArr.pop();
        break;
      }
      case options.three: {
        if (i !== arr.length - 1) resultArr.push(arr[i + 1]);
        break;
      }
      case options.four: {
        if (i !== 0) resultArr.push(arr[i - 1]);
        break;
      }
      default: {
        resultArr.push(arr[i]);
      }
    }
  }
  return resultArr;
};
