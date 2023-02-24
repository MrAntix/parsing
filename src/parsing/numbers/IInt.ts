import { NumberEnumMap } from '../../numbers';
import { IParser } from '../IParser';
import { NextBuilder } from '../NextBuilder';
import { Nullable } from '../Nullable';
import { NumberParsableTypes } from './NumberParsableTypes';

/** Fluent API interfaces for integers */
export namespace IInt {

  export interface Parser extends IParser<number> {
    /** parse with the radix */
    withRadix: (value?: number) => NextBuilder<Parser, 'withRadix', 'parse'>;

    /** negate the parser */
    readonly not: NextBuilder<Parser, 'not' | 'parse'>;

    /** equals the passed value */
    equals(value: Nullable<NumberParsableTypes>): NextBuilder<Parser, 'equals', 'not' | 'parse'>;
    /** one of the passed values */
    oneOf(values: NumberParsableTypes[] | NumberEnumMap): NextBuilder<Parser, 'oneOf', 'not' | 'parse'>;

    /** is greater or equal to passed value */
    min(value: NumberParsableTypes, exclusive?: boolean): NextBuilder<Parser, 'min', 'not' | 'parse'>;
    /** is less or equal to passed value */
    max(value: NumberParsableTypes, exclusive?: boolean): NextBuilder<Parser, 'max', 'not' | 'parse'>;
  }
}
