var numbers = [12, 324, 22, 100];
var result = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50){
    result.push(numbers[i]);
  }
}

console.log(result);