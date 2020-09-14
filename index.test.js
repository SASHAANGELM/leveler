const { limiter, leveler } = require('./index');

describe('limiter()', () => {
  test('(0, 25, 75) // 25', () => {
    const result = limiter(0, 25, 75);
    expect(result).toBe(25)
  });

  test('(25, 25, 75) // 25', () => {
    const result = limiter(25, 25, 75);
    expect(result).toBe(25)
  });

  test('(50, 25, 75) // 50', () => {
    const result = limiter(50, 25, 75);
    expect(result).toBe(50)
  });

  test('(75, 25, 75) // 75', () => {
    const result = limiter(75, 25, 75);
    expect(result).toBe(75)
  });

  test('(100, 25, 75) // 75', () => {
    const result = limiter(100, 25, 75);
    expect(result).toBe(75)
  });

  // Inverted min and max
  test('(120, 100, 0) // 100', () => {
    const result = limiter(120, 100, 0);
    expect(result).toBe(100)
  });
  test('(50, 100, 0) // 50', () => {
    const result = limiter(50, 100, 0);
    expect(result).toBe(50);
  });
  test('(0, 100, 0) // 0', () => {
    const result = limiter(0, 100, 0);
    expect(result).toBe(0);
  });
});

describe('leveler()', () => {
  test('(0, [50, 150, 0, 1]) // 0', () => {
    const result = leveler(0, [50, 150, 0, 1]);
    expect(result).toBe(0);
  });

  test('(50, [50, 150, 0, 1]) // 0', () => {
    const result = leveler(0, [50, 150, 0, 1]);
    expect(result).toBe(0);
  });

  test('(75, [50, 150, 0, 1]) // 0.25', () => {
    const result = leveler(75, [50, 150, 0, 1]);
    expect(result).toBe(0.25);
  });

  test('(100, [50, 150, 0, 1]) // 0.5', () => {
    const result = leveler(100, [50, 150, 0, 1]);
    expect(result).toBe(0.5);
  });

  test('(125, [50, 150, 0, 1]) // 0.75', () => {
    const result = leveler(125, [50, 150, 0, 1]);
    expect(result).toBe(0.75);
  });

  test('(150, [50, 150, 0, 1]) // 1', () => {
    const result = leveler(150, [50, 150, 0, 1]);
    expect(result).toBe(1);
  });

  test('(200, [50, 150, 0, 1]) // 1', () => {
    const result = leveler(200, [50, 150, 0, 1]);
    expect(result).toBe(1);
  });  

  // Inverted target range
  test('(1, [1, 0, 0, 100]) // 0', () => {
    const result = leveler(1, [1, 0, 0, 100]);
    expect(result).toBe(0);
  });
  test('(0.5, [1, 0, 0, 100]) // 50', () => {
    const result = leveler(0.5, [1, 0, 0, 100]);
    expect(result).toBe(50);
  });
  test('(0.25, [1, 0, 0, 100]) // 75', () => {
    const result = leveler(0.25, [1, 0, 0, 100]);
    expect(result).toBe(75);
  });

  // Inverted source range from target range
  test('(25, [0, 100, 1, 0]) // 0.75', () => {
    const result = leveler(25, [0, 100, 1, 0]);
    expect(result).toBe(0.75);
  });
  test('(50, [0, 100, 1, 0]) // 0.5', () => {
    const result = leveler(50, [0, 100, 1, 0]);
    expect(result).toBe(0.5);
  });
  test('(75, [0, 100, 1, 0]) // 0.25', () => {
    const result = leveler(75, [0, 100, 1, 0]);
    expect(result).toBe(0.25);
  });

  // Both ranges inverted
  test('(25, [0, 100, 0, 1]) // 0.25', () => {
    const result = leveler(25, [0, 100, 0, 1]);
    expect(result).toBe(0.25);
  });
  test('(75, [0, 100, 0, 1]) // 0.75', () => {
    const result = leveler(75, [0, 100, 0, 1]);
    expect(result).toBe(0.75);
  });
  test('(100, [0, 100, 0, 1]) // 1', () => {
    const result = leveler(100, [0, 100, 0, 1]);
    expect(result).toBe(1);
  });
});
