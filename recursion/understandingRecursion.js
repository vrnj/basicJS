let numbers = [1, 2, 3, 4, 5];

function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
   
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum(numbers, 1));