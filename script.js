function fibonacci(num) {
  if (num === 1) return 0; // Base case: 1st Fibonacci number is 0
  if (num === 2) return 1; // Base case: 2nd Fibonacci number is 1
  
  let a = 0, b = 1, result = 0;
  for (let i = 3; i <= num; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}

module.exports = fibonacci;
