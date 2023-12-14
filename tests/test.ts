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

    it('expect R:4,5#area to return 20', () => {
        const result = calculate('R:4,5#area');
        expect(result).toEqual(20);
    });

    it('expect G:123#area to throw error with message "shape G is unknown"', () => {
        try {
            const result = calculate('G:123#area');
            // expect(result).not.toEqual(undefined);
        } catch(err) {
            expect((err as Error).message).toEqual('Shape G is unknown');
        }
    })
});
