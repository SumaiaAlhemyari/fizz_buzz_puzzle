// assign number to variable x
let x=17;
// call fbp function
console.log(fbp(x))
// function declaration
function fbp(x) {
    // for loop that runs through numbers from 1 to x
    for(let i=1; i<=x; i++) {
        // we start with both conditions
        if(i%3==0 && i%5==0){
            console.log('Fizz Buzz Puzzle');
        } else if(i%3==0 ){ //second condition
            console.log('Fizz');
        }else if(i%5==0 ){ //thired condition
            console.log('Buzz');
        }else { // non applied
            console.log(i);
        }
    }
}
