function limiter(value, min, max) {
  if (value < min) return min;
  else if (value > max) return max;
  return value;
}

function leveler(value, params) {
  const [ minSource, maxSource, minTarget, maxTarget ] = params;

  params = {
    source: {
      min: minSource,
      max: maxSource
    },
    target: {
      min: minTarget,
      max: maxTarget
    }
  };

  value = limiter(value, params.source.min, params.source.max);
  const sourceRange = params.source.max - params.source.min;
  const percent = (value - params.source.min) / sourceRange;

  const targetRange = params.target.max - params.target.min;
  const target = percent * targetRange + params.target.min;

  return target;
}

module.exports = {
  limiter,
  leveler
};
