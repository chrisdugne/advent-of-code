import test from 'ava'
import {extractPair, oneFullyContainsTheOther} from './part1.js'

test('extractPair', t => {
  t.deepEqual(extractPair('21-82,8-8'), [[21,82], [8,8]])
  t.deepEqual(extractPair('21-82,8-14'), [[21,82], [8,14]])
  t.deepEqual(extractPair('2-2,8-8'), [[2,2], [8,8]])
})

test('oneFullyContainsTheOther', t => {
  t.is(oneFullyContainsTheOther([2,4],[2,6]), true)
  t.is(oneFullyContainsTheOther([2,4],[6-8]), false)
  t.is(oneFullyContainsTheOther([6,6],[6]), true)
  t.is(oneFullyContainsTheOther([6],[6,6]), true)
  t.is(oneFullyContainsTheOther([3,7],[2,3]), false)
  t.is(oneFullyContainsTheOther([2,8],[3,7]), true)
  t.is(oneFullyContainsTheOther([14,99],[8,8]), false)
  t.is(oneFullyContainsTheOther([21,82], [8,8]), false)
})
