function limiter(value, max, min) {
  if (value > max) {
    return max;
  } else if (value < min) {
    return min;
  }
  return value;
}

function leveler(value, minInput = 0, maxInput = 1, minOutput = 0, maxOutput = 1) {
  return value;
}

module.exports = {
  limiter,
  leveler
};
