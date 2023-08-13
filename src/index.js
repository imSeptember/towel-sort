
// You should implement your task here.

module.exports = function towelSort (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (i == 1) {
      matrix[i].sort((a, b) => b - a);
    } else matrix[i].sort((a, b) => a - b);
  }
  return matrix.flat();
}
