import { closest } from './index';
import { markup } from '../testUtils';

describe('closest', () => {
  let el;
  beforeAll(() => {
    document.body.innerHTML = markup;
    el = document.getElementById('test-item');
  });

  it('should return the closest selector when a string is passed', () => {
    const result = closest(el, '#container');

    expect(result).toBe(document.getElementById('container'));
  });

  it('should return the closest selector when an array is passed', () => {
    const result = closest(el, Array.from(document.querySelectorAll('div')));

    expect(result).toBe(document.getElementById('container'));
  });

  it('should return the closest selector when an NodeList is passed', () => {
    const result = closest(el, document.querySelectorAll('div'));

    expect(result).toBe(document.getElementById('container'));
  });

  it('should return the closest selector when an element is passed', () => {
    const result = closest(el, document.getElementById('container'));

    expect(result).toBe(document.getElementById('container'));
  });

  it('should return the closest selector when an element is passed', () => {
    const result = closest(el, el.nextElementSibling);

    expect(result).toBe(null);
  });
});
