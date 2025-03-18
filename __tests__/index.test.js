import { removeDuplicates, sortNumbers, sumPositiveNumbers, groupByParity, findCommonElements } from '../arrayUtils.js';
import { describe, expect, test } from '@jest/globals';

describe('removeDuplicates', () => {
    test('Удаление дупликатов', () => {
        expect(removeDuplicates([1, 1, 1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(removeDuplicates([])).toEqual([]);
    })
});
describe('sortNumbers', () => {
    test('Сортировка чисел в порядке возрастания', () => {
        expect(sortNumbers([3, 6, 2, 5, 1, 4, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(sortNumbers([])).toEqual([]);
    })
});
describe('sumPositiveNumbers', () => {
    test('Проверка суммы положительных чисел', () =>{
        expect(sumPositiveNumbers([1, -2, 3, -4, 5])).toBe(9);
        expect(sumPositiveNumbers([])).toBe(0);
    });
});
describe('groupByParity', () => {
    test('Сортировка по четности', () => {
        expect(groupByParity([1, 2, 3, 4, 5])).toEqual({ even: [2, 4], odd: [1, 3, 5] });
        expect(groupByParity([])).toEqual({ even: [], odd: [] });
    })
});
describe('findCommonElements', () => {
    test('Общие элементы', () => {
        expect(findCommonElements([1, 2, 3], [2, 5, 3])).toEqual([2, 3]);
        expect(findCommonElements([1, 2, 3], [])).toEqual([]);
    })
});
