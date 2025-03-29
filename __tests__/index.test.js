import { removeDuplicates, sortNumbers, sumPositiveNumbers, groupByParity, findCommonElements } from '../arrayUtils.js';
import { describe, expect, test } from '@jest/globals';

describe('removeDuplicates', () => {
    test('Удаление дупликатов', () => {
        expect(removeDuplicates([1, 1, 1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(removeDuplicates([])).toEqual([]);
        expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
        expect(removeDuplicates(['a', 'b', 'a', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    })
});
describe('sortNumbers', () => {
    test('Сортировка чисел в порядке возрастания', () => {
        expect(sortNumbers([3, 6, 2, 5, 1, 4, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(sortNumbers([])).toEqual([]);
        expect(sortNumbers([-20, 1, 9, -10, 5, 6, -1])).toEqual([-20, -10, -1, 1, 5, 6, 9]);
        expect(sortNumbers([1.5, 1.1, 2.3])).toEqual([1.1, 1.5, 2.3]);
    })
});
describe('sumPositiveNumbers', () => {
    test('Проверка суммы положительных чисел', () =>{
        expect(sumPositiveNumbers([1, -2, 3, -4, 5])).toBe(9);
        expect(sumPositiveNumbers([])).toBe(0);
        expect(sumPositiveNumbers([-1, -2, -3])).toBe(0);
        expect(sumPositiveNumbers([0, 0, 0])).toBe(0);
    });
});
describe('groupByParity', () => {
    test('Сортировка по четности', () => {
        expect(groupByParity([1, 2, 3, 4, 5])).toEqual({ even: [2, 4], odd: [1, 3, 5] });
        expect(groupByParity([])).toEqual({ even: [], odd: [] });
        expect(groupByParity([-1, -2, -3, -4, ])).toEqual({ even: [-2, -4], odd: [-1, -3, ] });
        expect(groupByParity([2, 4, 6])).toEqual({ even: [2, 4, 6], odd: [] })
    })
});
describe('findCommonElements', () => {
    test('Общие элементы', () => {
        expect(findCommonElements([1, 2, 3], [2, 5, 3])).toEqual([2, 3]);
        expect(findCommonElements([1, 2, 3], [])).toEqual([]);
        expect(findCommonElements([], [])).toEqual([]);
        expect(findCommonElements(['a', 'b'], ['b', 'c'])).toEqual(['b']);
        expect(findCommonElements([1, '1'], ['1', 2])).toEqual(['1']);
    })
});
