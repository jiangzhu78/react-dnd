'use strict';

function snapToGrid(x, y) {
  x = Math.round(x / 32) * 32;
  y = Math.round(y / 32) * 32;

  return [x, y];
}

module.exports = snapToGrid;