import { describe, it } from 'node:test';
import assert from 'node:assert';
import { run } from './server';

describe('run', () => {
  it('exists', () => {
    assert.equal(typeof run, 'function');
  });

  it('works', () => {
    assert.doesNotThrow(() => {
      run();
    });
  });
});
