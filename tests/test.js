const calculator = require('../src');

describe('TDD Workshop', () => {
    it('Expect true to be true', () => {
        expect(true).toBe(true);
    })

    it('expect null input to throw invalid input error', () => {
        try {
            calculator.calculate();
        } catch (err) {
            expect(err.message).toEqual('Invalid input');
        }
    })

    it('expect empty input to throw invalid input error', () => {
        try {
            calculator.calculate('');
        } catch (err) {
            expect(err.message).toEqual('Invalid input');
        }
    })

    it('expect wrong input format to throw Parsing error', () => {
        try {
            calculator.calculate('bla bla');
        } catch (err) {
            expect(err.message).toEqual('Parsing error');
        }
    })

    it('expect C:15#area to return 706.5', () => {
        const result = calculator.calculate('C:15#area');
        expect(result).toEqual(706.5);
    });
});