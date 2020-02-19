module.exports = function repeater(str, options) {
    options.separator = options.separator || '+';
    options.addition = String(options.addition) || '';
    options.additionSeparator = options.additionSeparator || '|';
    let result = '';
    let addResult = '';

    if (options.additionRepeatTimes) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            addResult += (options.additionRepeatTimes - 1 === j) ? `${options.addition}` : `${options.addition}${options.additionSeparator}`;
        }
    }

    if (options.repeatTimes) {
        for (let i = 0; i < options.repeatTimes; i++) {
            result += (options.repeatTimes - 1 === i) ? `${str}${addResult}` : `${str}${addResult}${options.separator}`;
        }
    } else {
        result = `${str}${options.addition}`;
    }
    return result;
};