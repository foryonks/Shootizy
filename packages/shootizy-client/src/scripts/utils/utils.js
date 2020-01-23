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

/** Convert simple array to matrix (array in array)
 * @param {Array} arr
 * @param {Number} width of array
 * @param {Object} Params
 *    @param transform {Function}
 * @returns Array
 */
export const toMatrix = (myArr, width, { transform = item => item, fill = false }) => {
  myArr = myArr.reduce(
    (rows, key, index) =>
      (index % width === 0 ? rows.push(transform([key])) : rows[rows.length - 1].push(key)) && rows,
    []
  );

  if (fill && myArr.length) {
    let lastLine = myArr[myArr.length - 1];
    while (lastLine.length < width) {
      lastLine.push("");
    }
  }
  return myArr;
};

/**
 * Return clean string without html and trucate by number
 * @param {string} str
 * @param {number} length
 */
export const sliceAndRemoveHTML = (str, length) => {
  const div = document.createElement("div");
  div.innerHTML = str;
  const text = div.textContent;
  return text.length > length
    ? text
        .split(" ")
        .slice(0, length)
        .join(" ")
        .replace(/[.,]$/, "") + "..."
    : text;
};

// export const arrayFill = (array, num) => {
//   if(array.length < num) {

//   }
//   return array;
// }
