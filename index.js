const forFactorial = (a)=>{
    let  temp =1;
    for(let i = 1; i<=a; i++){
        temp*=i;
    }
    console.log(temp); 
};

forFactorial(5);

const rekrusionFactorial = (n)=>{
    if(n==1){
      return 1;
    }
    else{
        return n * rekrusionFactorial(n-1);
    }
}
console.log(rekrusionFactorial(5));

function recursion(num) {
    if(num < 1) {
        console.log('number must be greater than 1');
        return;
    }
    if(num === 1) {
        return 1;
    }
    if(num === recursion.prototype.max) {
        recursion.prototype.max = 1;
        recursion.prototype.firstCall = true;
        return num;
    }
    if(recursion.prototype.firstCall) {
        recursion.prototype.max = num;
        recursion.prototype.firstCall = false;
    } else {
        return num * recursion(num + 1);
    }
    return recursion(2)
}

recursion.prototype.max = 1;
recursion.prototype.firstCall = true;
console.log(recursion(5));