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
  },
  rgbToHsl(rgbArr) {
    const r1 = rgbArr[0] / 255;
    const g1 = rgbArr[1] / 255;
    const b1 = rgbArr[2] / 255;
    const maxColor = Math.max(r1, g1, b1);
    const minColor = Math.min(r1, g1, b1);
    let L = (maxColor + minColor) / 2 ;
    let S = 0;
    let H = 0;
    if (maxColor != minColor){
        if (L < 0.5){
          S = (maxColor - minColor) / (maxColor + minColor);
        } else {
          S = (maxColor - minColor) / (2.0 - maxColor - minColor);
        }
        if (r1 == maxColor){
          H = (g1 - b1) / (maxColor - minColor);
        } else if (g1 == maxColor){
          H = 2.0 + (b1 - r1) / (maxColor - minColor);
        } else {
          H = 4.0 + (r1 - g1) / (maxColor - minColor);
        }
    }
    L = Math.round(L * 100);
    S = Math.round(S * 100);
    H = Math.round(H * 60);
    if (H < 0){
      H += 360;
    }
    return [H, S, L];
  }
}