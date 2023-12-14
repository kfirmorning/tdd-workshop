import {describe, expect, it} from '@jest/globals';
import { calculate } from '../src';

describe('TDD Workshop', () => {
    it('Expect true to be true', () => {
        expect(true).toBe(true);
    })

    it('expect empty input to throw invalid input error', () => {
        try {
            calculate('');
        } catch (err) {
            expect((err as Error).message).toEqual('Invalid input');
        }
    })

    it('expect wrong input format to throw Parsing error', () => {
        try {
            calculate('bla bla');
        } catch (err) {
            expect((err as Error).message).toEqual('Parsing error');
        }
    })

    it('expect C:15#area to return 706.5', () => {
        const result = calculate('C:15#area');
        expect(result).toEqual(706.5);
    });
});