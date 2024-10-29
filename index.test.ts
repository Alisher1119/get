import {get} from './index';

describe('get function', () => {
    const testObj = {
        a: {
            b: {
                c: 42,
                d: null,
            },
        },
        x: [1, 2, 3],
        y: 'hello',
    };

    it('should return the value for an existing path', () => {
        expect(get(testObj, 'a.b.c', 'default')).toBe(42);
    });

    it('should return the default value for a non-existing path', () => {
        expect(get(testObj, 'a.b.e', 'default')).toBe('default');
    });

    it('should return the default value when the object is undefined', () => {
        expect(get(undefined, 'a.b.c', 'default')).toBe('default');
    });

    it('should return the default value for a null property', () => {
        expect(get(testObj, 'a.b.d')).toBe(null);
    });

    it('should correctly handle array paths', () => {
        expect(get(testObj, 'x[1]', 'default')).toBe(2);
        expect(get(testObj, 'x[3]', 'default')).toBe('default');
    });

    it('should correctly handle paths with a mix of strings and arrays', () => {
        expect(get(testObj, 'a.b.c', 'default')).toBe(42);
        expect(get(testObj, ['a', 'b', 'c'], 'default')).toBe(42);
        expect(get(testObj, ['a', 'b', 'e'], 'default')).toBe('default');
    });

    it('should return the default value if the resolved value is undefined', () => {
        expect(get(testObj, 'y.z', 'default')).toBe('default');
    });

    it('should return a string value correctly', () => {
        expect(get(testObj, 'y', 'default')).toBe('hello');
    });
});