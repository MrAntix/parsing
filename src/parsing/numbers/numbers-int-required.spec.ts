import { Is } from '../../Is';
import { ParseErrors } from '../ParseErrors';

describe('numbers-int-required', () => {
  const parser = Is.required.int;

  it('failure undefined', () => {
    const result = parser.parse(undefined);

    expect(result.errors).toEqual(ParseErrors.required);
    expect(result.value).toBe(undefined);
  });

  it('failure null', () => {
    const result = parser.parse(null);

    expect(result.errors).toEqual(ParseErrors.required);
    expect(result.value).toBe(null);
  });

  it('failure string empty', () => {
    const result = parser.parse('');

    expect(result.errors).toEqual(ParseErrors.required);
    expect(result.value).toBe(null);
  });
});