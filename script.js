const hexValue = document.querySelector('.hex-value');
const blockOverlay = document.querySelector('.block-overlay');
const block = document.querySelector('.block');
const button = document.querySelector('.btn');
const swatch = document.querySelector('.swatch');

const MAX_HEX = parseInt('ff', 16);
let swatchCount = 0;
let selected = null;

const newColour = () => {
  if (selected) selected.classList.remove('active');
  const colour = rgbColour();
  const col = colourObject(); // new approach pass object: hex and rgb together
  console.log(col.hex, col.rgb);
  loadSwatch(colour);
  addSwatch(colour);
}

const addSwatch = (newColour) => {
  const clone = swatch.cloneNode(true);
  clone.id = String(++swatchCount);
  clone.value = newColour;
  clone.classList.add('swatch');
  Object.assign(clone.style, {
    backgroundColor: `#${newColour}`,
    display: 'inline-block',
  });
  clone.addEventListener('click', (e) => {
    selectSwatch(e);
    loadSwatch(e.target.value);
  });
  swatch.before(clone);
}

const selectSwatch = (e) => {
  if (selected) selected.classList.remove('active');
  e.target.classList.add('active');
  selected = e.target;
}

const loadSwatch = (colour) => {
  hexValue.textContent = `#${colour}`;
  const rgb = `${utils.hexToRgb(colour).join(',')}`;
  blockOverlay.innerHTML = `
    Hex: #${colour}<br>
    RGB: ${rgb}<br>
    <a href="https://www.colorhexa.com/${colour}">colorhexa.com</a>
  `;
  block.style.backgroundColor = `#${colour}`;
}

const hex = (n) => utils.rand(n).toString(16).padStart(2, '0').toUpperCase();

const rgbColour = () => `${hex(MAX_HEX)}${hex(MAX_HEX)}${hex(MAX_HEX)}`;

const rgbFromArray = (arr) => `rgb(${arr.join(', ')})`;

const colourObject = () => {
  const [r, g, b] = [
    utils.rand(MAX_HEX), 
    utils.rand(MAX_HEX), 
    utils.rand(MAX_HEX)
  ];
  return {
    hex: `${utils.convert.dec2hex(r)}${utils.convert.dec2hex(g)}${utils.convert.dec2hex(b)}`,
    rgb: `rgb(${[r, g, b].join(', ')})`
  }
}

button.addEventListener('click', () => newColour());

newColour();