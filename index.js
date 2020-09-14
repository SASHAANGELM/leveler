
/**
 * @param {number} value - Value.
 * @param {number} min - Min allowed value.
 * @param {number} max - Max allowed value.
 * @return {number}
 */
function limiter(value, min, max) {
  let _min = min;
  let _max = max;
  if (min > max) {
    _min = max;
    _max = min;
  }
  if (value < _min) return _min;
  else if (value > _max) return _max;
  return value;
}

/**
 * @param {number} value - Source value.
 * @param {number[]} params - Array with source and target parameters, [minSource: number, maxSource: number, minTarget: number, maxTarget: number].
 * @return {number}
 */
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
