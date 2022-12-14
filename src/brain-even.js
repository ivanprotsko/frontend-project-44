import getRandomArbitrary from './get-random-arbitrary.js';
import gameEngine from './game-engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const runEven = (gameRounds) => {
  const getRoundData = () => {
    const question = getRandomArbitrary();
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };
  gameEngine(description, gameRounds, getRoundData);
};
export default runEven;
