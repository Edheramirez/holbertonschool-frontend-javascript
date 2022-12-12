export default function hasValuesFromArray(set, arr) {
  let result = false;
  arr.forEach((element) => {
    result = set.has(element);
  });
  return result;
}
