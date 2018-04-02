/* eslint-env jest */
import { isNode } from './index';

describe('isNode', () => {
  it('should return `true` if an element node is passed as the argument', () => {
    const el = document.createElement('p');
    expect(isNode(el)).toBe(true);
  });
});
