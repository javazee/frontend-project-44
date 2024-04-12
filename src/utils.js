export const getRandomInt = (limit) => (Math.floor(Math.random() * limit));

export const getRandomFromArray = (signArray) => {
  const index = Math.floor(Math.random() * signArray.length);
  return signArray[index];
};

export const matches = (result, answer) => (result && answer === 'yes') || (!result && answer === 'no');
