const answer = []

// Write your code below this line
for (let i = 1; i <= 15; i++) {
  let answerToPush = ''
  if (i % 3 === 0) {
    answerToPush += 'Fizz'
  }
  if (i % 5 === 0) {
    answerToPush += 'Buzz'
  }
  if (i % 3 !== 0 && i % 5 !== 0) {
    answerToPush = i
  }
  answer.push(answerToPush)
}
console.log(answer)
// Don't touch the code below this line, we'll cover it later
module.exports = answer
