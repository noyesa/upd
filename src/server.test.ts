const { run } = require('./server');

describe('run', () => {
  it('exists', () => {
    expect(typeof run).toBe('function');
  });

  it('works', () => {
    expect(() => {
      run();
    }).not.toThrow();
  });
});
