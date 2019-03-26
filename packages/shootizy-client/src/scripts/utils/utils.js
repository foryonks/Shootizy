/**
 * This function generate unique key for each item in an array and return the array
 * @param {Array} array
 * @returns Array
 */

export const keyfix = array => {
  array.forEach((item, i) => {
    item.key = `${i}-${~~(Math.random() * 10000000)}`;
  });
  console.log(array);
  return array;
};
