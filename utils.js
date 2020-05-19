const utils = {
  convert: {
    dec2hex: s => parseInt(s, 10).toString(16).padStart(2, '0').toUpperCase(),
    hex2dec: s => parseInt(s, 16).toString(10)
  },
  hexToRgb(hex) {
    return hex.match(/.{2}/g).map(val => this.convert.hex2dec(val));
  },
  rand(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }
}