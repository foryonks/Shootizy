/**
 * This function generate unique key for each item in an array and return the array
 * @param {Array} array
 * @returns Array
 */

export const keyfix = array => {
  array.forEach((item, i) => {
    item.key = `${i}-${~~(Math.random() * 10000000)}`;
  });
  return array;
};

/** Convert simple array to matrix
 * @param {Array} arr
 * @param {Number} width
 * @returns Array
 */
export const toMatrix = (myArr, width, { transform = item => item, fill = false }) => {
  myArr = myArr.reduce(
    (rows, key, index) =>
      (index % width === 0 ? rows.push(transform([key])) : rows[rows.length - 1].push(key)) && rows,
    []
  );

  if (fill) {
    let lastLine = myArr[myArr.length - 1];
    while (lastLine.length < width) {
      lastLine.push("");
    }
  }
  return myArr;
};