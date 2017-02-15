/**
 *  Equipment generate
 *  @param colors ['#fff', '#222', '#d10', '#d80', '#d0d', '#80d', '#0ad', '#0d3', '#ddd']
 *  Author: LLQ
 */


FF FF FF FF FF FF FF FF FF FF FFF
1x 2x 3x 4x 5x 6x 7x 8x 9x FF color

// FULL
FFFFFFFFFFFFFFFFFFFFFFF

// ZIP
FFFFFFFFFFFFFF
------------------------------
|                 9
|                 |10
|                 ||11
|                 |||12
|                 ||||13
|        012345678ppCCC
|Code = 'FFFFFFFFFFFFFF';
------------------------------


function getRandomHex(length) {
  return parseInt(Math.random() * (length || 16)).toString(16);
}

// (0.5 - Math.random()) * 1000000000

function randomCode() {
  let colors = ['fff', '222', 'd10', 'd80', 'd0d', '80d', '0ad', '0d3', 'ddd'];
  let lengthes = [2,3,1,2,3,4,5,6,5];

  let code = '';
  for(let i=0; i<9; i++) {
    code += getRandomHex(lengthes[i]);
  }
  // pos
  code += getRandomHex();
  code += getRandomHex();
  // color
  code += colors[Math.round(Math.random() * (colors.length - 1))];
  return code;
}
