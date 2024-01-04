
                  //          EVERY

 Array.prototype.myEvery = function(myFunction){
    for(let i = 0; i<this.length;i++){
        if(!myFunction(this[i],i,this)){
            return false;
        }
    }
    return true;
}

// const arrayNumbers = [1,2,3,4,5]; // stexcvela zangvac vory poxancveluya functionis 
// const res = myEvery(arrayNumbers,(item)=>{
//     return item <0; // kveradarcni false
// })
// const res = arrayNumbers.myEvery((item)=>{
//     return item>0;
// })
// console.log(res);

                ////////////////////FILTER

Array.prototype.myFilter = function(myFunction){
    const  customArray = [];
    for(let i = 0; i < this.length;i++){
        if(myFunction(this[i],i,this)){
            customArray.push(this[i]);
        }
    }
    return customArray; 
};
// const arrayNumbers = [1,2,3,4,5];
// const res = arrayNumbers.myFilter((item)=>{
//    return item % 2 ==0;
// })
// console.log(res);


//////////////////////   FIND


Array.prototype.myFind = function(myFunction){
    let count;
    for(let i = 0; i< this.length; i++){
        if(myFunction(this[i], i,this)){
           return count = this[i];
        }
    }
    return count;
}

// const arrayNumbers = [1,2,3,4,5];
// const res  = arrayNumbers.myFind((item)=>{
//     return item > 2;
// })
// console.log(res);

/////////////////////////  FINDINDEX

Array.prototype.myFindIndex = function(myFunction){

    for(let i = 0; i < this.length; i++){
        if(myFunction(this[i],i,this)){
            return  i;
        }
    }
    return -1;
}
// let arrayNumbers = [1,2,3,4,5];
// let res = arrayNumbers.myFindIndex((item)=>{
//     return item > 3;
// });
// console.log(res);

/////////////////// Some
Array.prototype.mySome = function(myFunction){
    for(let i = 0; i < this.length; i++){
        if(myFunction(this[i],i,this)){
            return true;
        }
    }
    return false;
}

// let arrayNumbers = [1,2,3,4,5];
// let res = arrayNumbers.mySome((item)=>{
//     return item > 2;
// })
// console.log(res);

//////////////////////// map

Array.prototype.myMap = function(myFunction){
    
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        (newArr.push(myFunction(this[i],i,this)));
    }
    return newArr;
}

// let arrayNumbers = [1,2,3,4,5];
// console.log(arrayNumbers);
// let res = arrayNumbers.myMap((item)=>{
//     return item * 2;
// })
// console.log(res);


/////////////////////////////// JOIN


Array.prototype.myJoin = function(joinSymbol){
    if(typeof joinSymbol !=='string'){
        throw new TypeError('type ov symbol must be string!');
    }
    let symbolType = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== undefined && this[i] !== null) {
          symbolType += String(this[i]);
        }
        if (i < this.length - 1) {
            symbolType += joinSymbol;
          }
    }
    return symbolType;
}
let arrayNumbers = [1,2,3,4,5];
let res = arrayNumbers.myJoin('-');
console.log(res);