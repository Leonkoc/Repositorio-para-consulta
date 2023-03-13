function returnEvenValues(array) {
  let evenNumbs = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbs.push(array[i]);
    }
  }
  console.log("Os número pares são: ", evenNumbs);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
returnEvenValues(array);
