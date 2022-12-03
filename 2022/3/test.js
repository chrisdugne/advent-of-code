import test from 'ava'
import {findCommonItem, getPriority, sumPriorities} from './part1.js'
import {findBadge, gather} from './part2.js'

test('findCommonItem', t => {
  t.is(findCommonItem('vJrwpWtwJgWrhcsFMMfFFhFp'), 'p')
  t.is(findCommonItem('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'), 'L')
  t.is(findCommonItem('PmmdzqPrVvPwwTWBwg'), 'P')
  t.is(findCommonItem('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn'), 'v')
  t.is(findCommonItem('ttgJtRGJQctTZtZT'), 't')
  t.is(findCommonItem('CrZsJsPPZsGzwwsLwLmpwMDw'), 's')
  t.is(findCommonItem('mTWFFFTTtVSJMzzjWgSH'), 'W')
  t.is(findCommonItem('HfqccHzVDNqLmmPmPPQZ'), 'q')
})

test('getPriority', t => {
  t.is(getPriority('a'), 1)
  t.is(getPriority('z'), 26)
  t.is(getPriority('A'), 27)
  t.is(getPriority('Z'), 52)
})

test('sumPriorities', t => {
  const bags = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'
  ]

  t.is(sumPriorities(bags), 157)
})

test('findBadge', t => {
  t.is(findBadge([
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg'
  ]), 'r')

  t.is(findBadge([
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'
  ]), 'Z')
})

test('gatherBags', t => {
  const bags = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'
  ]

  t.deepEqual(gather(bags, 3), [
    [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg'
    ],
    [
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw'
    ]
  ])
})
