const input = document.querySelector("#colorInput");
const colorPicker = document.getElementById('color-picker');
const colorText = document.getElementById('color-text');
const generatePaletteBtn = document.getElementById('generate-palette');
const paletteContainer = document.getElementById('palette');
const body = document.body;
const colors = {
  red: "red",
  blue: "blue",
  green: "green",
  yellow: "yellow",
  purple: "purple",
  orange: "orange",
  pink: "pink",
  brown: "brown",
  cinnamon: "#D27D46",
  copper: "#B87333",       
  rust: "#8B3103",      
  terracotta: "#E2725B",   
  cork: "#D1A57F",       
  khaki: "#C3B091", 
  gray: "gray",
  black: "black",
  white: "#fff",
  cyan: "cyan",
  magenta: "magenta",
  teal: "teal",
  lime: "lime",
  maroon: "maroon",
  navy: "navy",
  olive: "olive",
  silver: "silver",
  gold: "gold",
  beige: "beige",
  coral: "coral",
  chocolate: "chocolate",
  violet: "violet",
  fuchsia: "fuchsia",
  indigo: "indigo",
  turquoise: "turquoise",
  lavender: "lavender",
  peach: "peach",   
  salmon: "salmon",
  plum: "plum",
  khaki: "khaki",
  sienna: "sienna",
  slateBlue: "slateBlue",
  tomato: "tomato",
  midnightBlue: "midnightBlue",
  snow: "snow",
  tan: "tan",
  ivory: "ivory",
  chartreuse: "chartreuse",
  moccasin: "moccasin",
  peru: "peru",
  bisque: "bisque",
  neongreen: '#39ff14',
  neonpink: '#ff6ec7',
  neonblue: '#1b03a3',
  neonyellow: '#fff01f',
  electriclime: '#ccff00',
  neoncyan: '#00ffe5',
  brightpink: '#ff007f',
  laserlemon: '#ffff54',
  darkblood: '#4a0000',
  darkmidnight: '#000033',
  darkcharcoal: '#333333',
  darkmoss: '#023020',
  darkruby: '#850606',
  darkgunmetal: '#1c1c1c',
  darkink: '#0a0a2a',
  deepshadow: '#1e1e1e',
  firebrick: '#b22222',
  darkolivegreen: '#556b2f',
  mediumturquoise: '#48d1cc',
  lightslategray: '#778899',
  orangered: '#ff4500',
  darkorchid: '#9932cc',
  paleturquoise: '#afeeee',
  darkblue: '#00008b',
  lightsteelblue: '#b0c4de',
  mediumslateblue: '#7b68ee',
  saddlebrown: '#8b4513',
  darkgreen: '#006400',
  lightgoldenrodyellow: '#fafad2',
  lawngreen: '#7cfc00',
  gainsboro: '#dcdcdc',
  darkslateblue: '#483d8b',
  floralwhite: '#fffaf0',
  ghostwhite: '#f8f8ff',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  lightcyan: '#e0ffff',
  linen: '#faf0e6',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  oldlace: '#fdf5e6',
  papayawhip: '#ffefd5',
  seashell: '#fff5ee',
  thistle: '#d8bfd8',
  wheat: '#f5deb3',
  darkred: 'darkred',
  darkgreen: '#006400',
  darkblue: '#00008b',
  darkpurple: '#301934',
  darkpink: '#e75480',
  darkorange: '#ff8c00',
  darkyellow: '#8b8000',
  darkbrown: '#5c4033',
  darkgray: '#404040',
  darkcyan: '#008b8b',
  darkmagenta: '#8b008b',
  darkolive: '#556b2f',
  darknavy: '#000080',
  darkteal: '#004d4d',
  darklime: '#478778',
  darkmaroon: '#800000',
  darkviolet: '#9400d3',
  darksalmon: '#e9967a',
  darkcoral: '#cd5b45',
  darkkhaki: '#bdb76b',
  neon: '#ffff00',
  lightred: "#ffcccb",
  lightblue: "#add8e6",
  lightgreen: "#90ee90",
  lightyellow: "#ffffe0",
  lightpurple: "#e6e6fa",
  lightorange: "#ffd580",
  lightpink: "#ffb6c1",
  lightbrown: "#d2b48c",
  lightgray: "#d3d3d3",
  lightcyan: "#e0ffff",
  lightmagenta: "#ff77ff",
  lightteal: "#afeeee",
  lightlime: "#f0fff0",
  lightmaroon: "#ffb3ba",
  lightnavy: "#b3cde0",
  lightolive: "#d9e6a2",
  lightsilver: "#e6e8fa",
  lightgold: "#fafad2",
  lightbeige: "#f5f5dc",
  lightcoral: "#f08080",
  lightchocolate: "#d2691e80",
  lightaqua: "#b3ffff",
  lightviolet: "#d8bfd8",
  lightfuchsia: "#ffb3ff",
  lightindigo: "#c3a6ff",
  lightturquoise: "#afeeee",
  lightlavender: "#e6e6fa",
  lightpeach: "#ffdab9",
  lightsalmon: "#ffa07a",
  lightplum: "#ffb3e6",
  lightkhaki: "#f0e68c",
  lightsienna: "#ffa07a80",
  lightslateblue: "#b0c4de",
  lighttomato: "#ffa07a",
  lightmidnightblue: "#19197080",
  lightsnow: "#fffafa",
  lighttan: "#f5deb380",
  lightivory: "#fffff0",
  lightchartreuse: "#dfff80",
  lightmoccasin: "#ffe4b580",
  lightperu: "#cd853f80",
  lightbisque: "#ffe4c480",
  lightneongreen: "#ccffcc",
  lightneonpink: "#ffb3ff",
  lightneonblue: "#b3e0ff",
  lightneonyellow: "#ffffb3",
  lightelectriclime: "#e6ffb3",
  lightneoncyan: "#b3ffff",
  lightbrightpink: "#ffb3e6",
  lightlaserlemon: "#ffffb3",
  lightfirebrick: "#ff6b6b",
  lightorangered: "#ff8c66",
  lightpaleturquoise: "#b3ffff",
  lightlightsteelblue: "#c6d9ec",
  lightmediumslateblue: "#b3c6ff",
  lightdarkslateblue: "#b3b3e6",
  lightfloralwhite: "#fffaf0",
  lightghostwhite: "#f8f8ff",
  lighthoneydew: "#f0fff0",
  lighthotpink: "#ffb3e6",
  lightindianred: "#ffb3b3",
  lightlightcyan: "#e0ffff",
  lightlinen: "#faf0e6",
  lightmintcream: "#f5fffa",
  lightmistyrose: "#ffe4e1",
  lightoldlace: "#fdf5e6",
  lightpapayawhip: "#ffefd5",
  lightseashell: "#fff5ee",
  lightthistle: "#e6d8e6",
  lightwheat: "#f5deb3",
  ash:"#B2BEB5",
  darkash: "#6E7F80",
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  skyblue: "#87CEEB",    
  lightskyblue: "#87CEFA", 
  deepskyblue: "#00BFFF", 
  morningsky: "#CAEBFD",    
  noonsky: "#7EC0EE",       
  twilightsky: "#3A5FCD",   
  stormysky: "#4682B4",    
  nightsky: "#191970", 
  mandarin: "#F37A48",      
  mandarinLight: "#FFA07A", 
  mandarinDark: "#E34C26",
  peach: "#FFE5B4",         
  peachPink: "#FFDAB9",     
  peachDark: "#FFCBA4",
  lemon: "#FFF44F",
  lemonLight: "#FFFF99",
  lemonDark: "#F6E547",
  lemonZest: "#F5D547",
  emerald: "#50C878",
  ruby: "#E0115F",
  sapphire: "#0F52BA",
  amber: "#FFBF00",
  sand: "#F4A460",
  forest: "#228B22",
  moss: "#8A9A5B",
  clay: "#B66A50",
  mint: "#98FF98",
  coffee: "#6F4E37",
  caramel: "#AF6E4D",
  matcha: "#A7C4A0",
  berry: "#990F4B",
  eggplant: "#614051",
  blurple: "#5865F2",
  spotifyGreen: "#1DB954",
  youtubeRed: "#FF0000",
  tiktokPink: "#FE2C55",
  rebeccapurple: "#663399",
  crimson: "#DC143C",
  cornflowerblue: "#6495ED",
  dodgerblue: "#1E90FF",
  charcoal: "#36454F",
  smoke: "#848884",
  stone: "#928E85",
  bronze: "#CD7F32",
  steel: "#4682B4",
  iron: "#322C2B",
  pitch:"#0A0A0A",
  darkpeach:"#DE7E5D",
  turquoise: "#40E0D0",
  lavender: "#E6E6FA",
  ivory: "#FFFFF0",
  aqua : "#00FFFF",
  onions:"#B96C93",
  redonions:"#894452",
  wine:"#722F37",
  grape:"#6F2C91",
  blueberry:"#4F86F7",
  raspberry:"#D5006D",
  strawberry:"#FA5053",
  watermelon:"#FC6C85",
  cantaloupe:"#FFA07A",
  honeydew:"#F0FFF0",
  kiwi:"#8EE53F",
  papaya:"##FF7628",
  coconut:"#965A3E",
  onion:"#B96C93",
};

if (input) {
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase().trim();
    input.style.backgroundColor = colors[value] || "#ffffff9c";
    input.style.color = colors[value] ? "#fff" : "#000";
    if (colorPicker && colorText) {
      colorText.value = colorPicker.value;
    }
  });
}

if (colorPicker && colorText) {
  // colorText.value = colorPicker.value;

  colorPicker.addEventListener('input', () => {
    colorText.value = colorPicker.value;
  });

  colorText.addEventListener('input', updateColorFromText);
  colorText.addEventListener('change', updateColorFromText);

  colorText.addEventListener('blur', () => {
    if (!isValidColor(colorText.value.trim())) {
      colorText.value = colorPicker.value;
    }
  });
}

if (generatePaletteBtn) {
  generatePaletteBtn.addEventListener('click', () => {
    const color = colorPicker ? colorPicker.value : "#fff";
    const palette = generatePalette(color);
    displayPalette(palette);
    body.style.backgroundColor = color;
  });
}

function generatePalette(baseColor) {
  return [baseColor]; // Placeholder – replace with actual palette logic if needed
}

function displayPalette(colors) {
  if (!paletteContainer) return;
  paletteContainer.innerHTML = '';
  colors.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.style.backgroundColor = color;
    paletteContainer.appendChild(colorBox);
  });
}

function isValidColor(color) {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
}

function convertToHex(colorStr) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.style.color = colorStr;
  const computed = getComputedStyle(div).color;
  document.body.removeChild(div);

  const rgb = computed.match(/\d+/g);
  if (rgb && rgb.length >= 3) {
    const r = parseInt(rgb[0]).toString(16).padStart(2, '0');
    const g = parseInt(rgb[1]).toString(16).padStart(2, '0');
    const b = parseInt(rgb[2]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  return null;
}

function updateColorFromText() {
  const colorValue = colorText.value.trim();
  if (isValidColor(colorValue)) {
    const hexColor = convertToHex(colorValue);
    if (hexColor && colorPicker) {
      colorPicker.value = hexColor;
      body.style.backgroundColor = colorValue;
    }
  }
}
