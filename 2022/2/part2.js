import GUIDE from './strategy-guide.json' assert {type: 'json'};

const CHOICE_POINTS = [1,2,3]
const WIN = 6
const DRAW = 3
const LOSE = 0

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

const plops = ['X','Y','Z'] // le sort des scores sera dans le meme sens
// donc le max de points sera dans l'ordre => 0 = lose, 1 = draw, 2 = win

const sumPoints = (player, opponent, guide) =>
  guide.reduce((sum, round) => {
    const aim = round[player];
    const opponentChoice = 'ABC'.indexOf(round[opponent]);
    const scores = plops.map((c, index) => getScore(index, opponentChoice) + CHOICE_POINTS[index]).sort((a,b) => a - b )
    return sum += scores[plops.indexOf(aim)];
  }, 0)

const sum = sumPoints(1, 0, GUIDE);
console.log({sum});
