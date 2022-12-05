import test from 'ava'
import {useCrane9000} from './part1.js'
import {useCrane9001} from './part2.js'

const stacks = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
  ]

  const moves = [
    {move: 1, from: 2, to: 1},
    {move: 3, from: 1, to: 3},
    {move: 2, from: 2, to: 1},
    {move: 1, from: 1, to: 2},
  ]

test('useCrane9000', t => {
  t.deepEqual(useCrane9000(stacks, moves), 'CMZ')
})

test('useCrane9001', t => {
  t.deepEqual(useCrane9001(stacks, moves), 'MCD')
})
