function filterRange(arr, a, b) {
  let result = arr.filter(num => (a <= num && num <= b));
      return result;
}
