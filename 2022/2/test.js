import test from 'ava'
import {isWinner} from './part1.js'

// R < P < S
test('isWinner',  t => {
  t.is(isWinner(1,1,3), false) // paper - paper
  t.is(isWinner(0,1,3), false) // rock < paper
  t.is(isWinner(0,2,3), true)  // rock > scissors
  t.is(isWinner(2,1,3), true)  // scissors > paper
  t.is(isWinner(2,0,3), false) // scissors < rock

  t.is(isWinner(6,2,7), false)
  t.is(isWinner(6,3,7), true)
  t.is(isWinner(1,2,5), false)
  t.is(isWinner(1,3,7), false)
  t.is(isWinner(1,4,7), false)
  t.is(isWinner(1,0,7), true)
})
