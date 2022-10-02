import { Is } from '../../Is';
import { parseDate } from '../dates';
import { ParseErrors } from '../ParseErrors';

describe('objects-parser', () => {
  const now = new Date();
  enum JobTypes {
    manager,
    developer,
    tester,
  }

  interface IPerson {
    name: {
      given?: string;
      family: string;
    };
    dateOfBirth: Date;
    jobType?: JobTypes;
    salary?: number;
  }

  const nameParser = Is.object({
    given: Is.string,
    family: Is.required.string,
  });

  const personParser = Is.object<IPerson>({
    name: Is.required.use(nameParser),
    dateOfBirth: Is.required.date.max(now),
    jobType: Is.int.anyOf(JobTypes),
    salary: Is.float.min(0),
  });

  it('parse', () => {
    var value = {
      name: {
        family: 'FAMILY',
      },
      dateOfBirth: '2000-01-01',
    };

    const result = personParser.parse(value);

    expect(result.success).toBe(true);
    expect(result.value).toEqual({
      name: value.name,
      dateOfBirth: parseDate(value.dateOfBirth),
    });
  });

  it('parse - invalid name', () => {
    var value = {
      name: null,
      dateOfBirth: '2000-01-01',
    };

    const result = personParser.parse(value);

    expect(result.success).toBe(false);
    expect(result.errors).toEqual({
      name: ParseErrors.required,
    });
  });

  it('parse - invalid family name', () => {
    var value = {
      name: {},
      dateOfBirth: '2000-01-01',
    };

    const result = personParser.parse(value);

    expect(result.success).toBe(false);
    expect(result.errors).toEqual({
      name: { family: ParseErrors.required },
    });
  });

  it('parse - invalid DoB', () => {
    var value = {
      name: {
        family: 'FAMILY',
      },
      dateOfBirth: '3000-01-01',
    };

    const result = personParser.parse(value);

    expect(result.success).toBe(false);
    expect(result.errors).toEqual({
      dateOfBirth: ParseErrors.max(now),
    });
  });
});
