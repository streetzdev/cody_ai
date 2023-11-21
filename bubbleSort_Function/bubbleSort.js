let array = [5,3,6,2,10,1,9,4]

//Implement a bubble sort function
function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

bubbleSort(array);
console.log(array);