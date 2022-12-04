import test from 'ava'
import {extractPair, oneFullyContainsTheOther} from './part1.js'
import {overlaps} from './part2.js'

test('extractPair', t => {
  t.deepEqual(extractPair('21-82,8-8'), [[21,82], [8,8]])
  t.deepEqual(extractPair('21-82,8-14'), [[21,82], [8,14]])
  t.deepEqual(extractPair('2-2,8-8'), [[2,2], [8,8]])
})

test('oneFullyContainsTheOther', t => {
  t.is(oneFullyContainsTheOther([4,7],[2,8]), true)
  t.is(oneFullyContainsTheOther([2,4],[2,6]), true)
  t.is(oneFullyContainsTheOther([2,4],[6,8]), false)
  t.is(oneFullyContainsTheOther([3,7],[2,3]), false)
  t.is(oneFullyContainsTheOther([2,8],[3,7]), true)
  t.is(oneFullyContainsTheOther([14,99],[8,8]), false)
  t.is(oneFullyContainsTheOther([21,82], [8,8]), false)
})

test('overlaps', t => {
  t.deepEqual(overlaps([4,7],[2,8]), true)
  t.deepEqual(overlaps([2,4],[4,6]), true)
  t.deepEqual(overlaps([2,4],[1,1]), false)
  t.deepEqual(overlaps([2,4],[1,3]), true)
  t.deepEqual(overlaps([1,3],[2,3]), true)
  t.deepEqual(overlaps([1,3],[4,5]), false)
})
