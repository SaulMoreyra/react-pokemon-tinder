export const getRandomNumber = (max: number, min = 0) => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
};
