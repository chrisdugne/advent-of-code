import GUIDE from './strategy-guide.json' assert {type: 'json'};

const CHOICE_POINTS = [1,2,3]
const WIN = 6
const DRAW = 3
const LOSE = 0

const elf = {order: 'ABC'}
const me =  {order: 'XYZ'}
const players = [elf, me]

export const isWinner = (a, b, size) => {
  if(a === b) return false;

  const threshold = (size - 1)/2
  const diff = Math.abs(b-a)

  if (diff <= threshold) {
    return a === Math.max(a, b)
  }

  return a === Math.min(a, b)
}

const getScore = (a, b) => {
  if(a === b) return DRAW
  if(isWinner(a, b , 3)) return WIN
  return LOSE
}

const sumPoints = (player, opponent, guide) =>
  guide.reduce((sum, round) => {
    const playerChoice = players[player].order.indexOf(round[player]) ;
    const playerChoicePts = CHOICE_POINTS[playerChoice];

    const opponentChoice = players[opponent].order.indexOf(round[opponent]);

    const score = getScore(playerChoice, opponentChoice)
    return sum += playerChoicePts + score
  }, 0)

const sum = sumPoints(1, 0, GUIDE);
console.log({sum});
