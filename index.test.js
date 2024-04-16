// connects test doc to javascript doc & imports functions
const { multiplication, concat0dds } = require('./index')

describe('multiplication', () => {
    test('it multiplies 2 numbers correctly', () => {
        expect(multiplication(1, 2)).toEqual(2)
        expect(multiplication(-1, 2)).toEqual(-2)
        expect(multiplication(-1, -2)).toEqual(2)
        expect(multiplication(1, 0)).toEqual(0)

    })
// TODO: rewrite code based off workshop. try and understand concepts
    test('it will return NaN if input does not contain 2 numbers', () => {
        expect(multiplication(1)).toEqual(NaN)
        expect(multiplication(1, 'a')).toEqual(NaN)
        expect(multiplication('a', 1)).toEqual(NaN)
        expect(multiplication('a', 'b')).toEqual(NaN)
        expect(multiplication()).toEqual(NaN)
    })
})

describe('concat0dds', () => {
    test('it concats two arrays and returns only odd numbers', () => {
        expect(concat0dds([1, 2, 3], [-1, 4, 5])).toEqual([-1, 1, 3, 5])
        expect(concat0dds([1, 1, 1, 1], [3, 3, 3, 3])).toEqual([1, 3])
    })
    test('it returns an empty array if 2 arrays are not passed in or if either arrays contains any input other than integers', () => {
        expect(concatOdds()).toEqual([])
        expect(concatOdds([ 1 ])).toEqual([])
        expect(concatOdds([ 1, 3, 'a' ], [ 1, 3 ])).toEqual([])
        expect(concatOdds([ 1, 3 ], [ 1, 3, 'a' ])).toEqual([])
        expect(concatOdds(0, [ 1, 2, 4 ])).toEqual([])
        expect(concatOdds([1, 3], 0)).toEqual([])
    })
})