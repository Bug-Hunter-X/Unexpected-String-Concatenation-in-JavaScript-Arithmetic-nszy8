function foo(a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(foo(1, '2')); // Output: 3

//Alternative solution using Number()
function bar(a,b){
    return Number(a) + Number(b);
}
console.log(bar(1,'2')); //Output:3