class VigenereCipheringMachine {

  constructor(modification = true) {
    this.firstNumberLetter = 'a'.charCodeAt();
    this.lastNumberLetter = 'z'.charCodeAt();
    this.modification = modification;
  }

  encrypt(str, key) {
    return this.getResult(str, key, true);
  }

  decrypt(str, key) {
    return this.getResult(str, key, false);
  }

  getLetterCodes(str, key) {
    if (!str && !key) throw new Error('Error');

    const strCodes = str.toLowerCase().split('');
    strCodes.map((item, index, arr) => {
      arr[index] = item.charCodeAt();
    });

    const keyKodes = key.toLowerCase().split('');

    keyKodes.map((item, index, arr) => {
      arr[index] = item.charCodeAt();
    });

    const resKeyKodes = [];

    let j = 0;

    for (let i = 0; i < strCodes.length; i++) {
      if (j === keyKodes.length) {
        j = 0;
      }
      if (strCodes[i] < this.firstNumberLetter) {
        resKeyKodes[i] = strCodes[i];
      } else {
        resKeyKodes[i] = keyKodes[j];
        j++;
      }
    }
    return {strCodes, keyKodes, resKeyKodes};
  }

  getResult(str, key, flag) {
    const codes = this.getLetterCodes(str, key);

    let result = [];

    codes.strCodes.forEach((item, index) => {
      let difference, charCode;

      if (flag) {
        difference = item - this.firstNumberLetter;

        charCode = (codes.resKeyKodes[index] + difference > this.lastNumberLetter)
            ? (codes.resKeyKodes[index] + difference - 1) - this.lastNumberLetter
            : codes.resKeyKodes[index] + difference;
      } else {
        difference = item - codes.resKeyKodes[index];

        charCode = (difference < 0)
            ? this.lastNumberLetter + difference + 1
            : this.firstNumberLetter + difference;
      }

      charCode = (charCode < 97) ? charCode + this.firstNumberLetter : charCode;
      if (item >= this.firstNumberLetter && item <= this.lastNumberLetter) {
        result.push(String.fromCharCode(charCode).toUpperCase());
      } else {
        result.push(String.fromCharCode(codes.strCodes[index]).toUpperCase());
      }
    });

    return (this.modification) ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
