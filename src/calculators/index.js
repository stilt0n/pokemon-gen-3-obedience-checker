export const badges = {
  kanto: {
    none: 10,
    boulder: 10,
    cascade: 30,
    thunder: 30,
    rainbow: 50,
    soul: 50,
    marsh: 70,
    volcano: 70,
    earth: 100,
  },
  hoenn: {
    none: 10,
    stone: 10,
    knuckle: 30,
    dynamo: 30,
    heat: 50,
    balance: 50,
    feather: 70,
    mind: 70,
    rain: 100,
  },
};

/* Probability calculation:
    r(l + c) / 256 >= c
    r(l + c) / 256c >= 1
    (l + c) / 256c >= 1/r
    256c / (l + c) >= r
    p(defect) = 255 - (256c / (l + c)) / 256
    p(obey) = 1 - p(defect)
*/
/**
 *
 * @param {number} pokemonLevel
 * @param {number} obedienceCap
 * @param {boolean} traded
 * @returns {number} the probability that the pokemon will obey an order
 */
export const getObedienceProbability = (pokemonLevel, obedienceCap, traded) => {
  if (!traded || pokemonLevel <= obedienceCap) return 1;
  const rmax = (256 * obedienceCap) / (pokemonLevel + obedienceCap);
  return 1 - (255 - rmax) / 256;
};

// Rounds to one decimal place
export const formatObedience = (probability) =>
  `Your pokemon has a ${
    Math.floor(1000 * probability) / 10
  }% chance of obeying`;
