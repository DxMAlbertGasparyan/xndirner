
                            //EVERY

//  Array.prototype.myEvery = function(/* poxancvuma zangvacy vorpes params */ /*esi callback functionsa qani vor yndunuma callback*/myFunction){
//     for(let i = 0; i<this.length;i++){//pttvum em zangvaci lengthivrov
//         if(!myFunction(this[i],i,this)){ //bolor elementnery stugelu paymanna ete mi element chi bavararum paymanin veradarcnelua false
//             return false;
//         }
//     }
//     return true; //ete ifi mej chi mtnum veradarcnum enq true
// }

// const arrayNumbers = [1,2,3,4,5]; // stexcvela zangvac vory poxancveluya functionis 
// // const res = myEvery(arrayNumbers,(item)=>{
// //     return item <0; // kveradarcni false
// // })
// const res = arrayNumbers.myEvery((item)=>{
//     return item>0;
// })
// console.log(res); // false console-um;


                //////////////////////FILTER

// Array.prototype.myFilter = function(/* zangvac*/myFunction/* callback function*/){
//     const  customArray = [] // unenum enq datark zangvac vordex push enq anelu nor elementnery kaxvac paymanic qani vor filter metody veradarcnum e zangvaci elemennery vory vor mez petq e\
//     for(let i = 0; i < this.length;i++)/*pttvum enq mer naxnakan zangvaci vrayov*/{
//         if(myFunction(this[i],i,this)){ //stugum enq elementnery arka en te che voric heto datark zangvacum avelacnum enq mer elementnery;
//             customArray.push(this[i]); // datark zangvacy stanalu e drsic ekac zangvacy;
//         }
//     }
//     return customArray; //veradarcnum enq mer nor zangvacy ete ifi mej chi mtnum kveradarcni datark zangvac;
// };
// const arrayNumbers = [1,2,3,4,5];
// const res = arrayNumbers.myFilter((item)=>{ /* stexcecinq popoxakan vortex kanchecinq functiony yev poxancecinq mer zangvacy */
//    return item % 2 ==0; // nor zangvacum veradarcnum enq zuyg tvery;
// })
// console.log(res); // false console-um;


////////////////////////   FIND


// Array.prototype.myFind = function(myFunction){
//     let count;
//     for(let i = 0; i< this.length; i++){
//         if(myFunction(this[i], i,this)){
//            return count = this[i];
//         }
//     }
//     return count;
// }

// const arrayNumbers = [1,2,3,4,5];
// const res  = arrayNumbers.myFind((item)=>{
//     return item > 2;
// })
// console.log(res);

///////////////////////////  FINDINDEX

// Array.prototype.myFindIndex = function(myFunction){
//     let count=-1;
//     for(let i = 0; i < this.length; i++){
//         if(myFunction(this[i],i,this)){
//             return count = i;
//         }
//     }
//     return count;
// }
// let arrayNumbers = [1,2,3,4,5];
// let res = arrayNumbers.myFindIndex((item)=>{
//     return item > 3;
// });
// console.log(res);

///////////////////// Some
// Array.prototype.mySome = function(myFunction){
//     for(let i = 0; i < this.length; i++){
//         if(myFunction(this[i])){
//             return true;
//         }
//     }
//     return false;
// }

// let arrayNumbers = [1,2,3,4,5];
// let res = arrayNumbers.mySome((item)=>{
//     return item > 2;
// })
// console.log(res);

////////////////////////// map

// Array.prototype.myMap = function(myFunction){
    
//     let newArr = [];
//     for(let i = 0; i < this.length; i++){
//         (newArr.push(myFunction(this[i])));
//     }
//     return newArr;
// }

// let arrayNumbers = [1,2,3,4,5];
// console.log(arrayNumbers);
// let res = arrayNumbers.myMap((item)=>{
//     return item * 2;
// })
// console.log(res);


///////////////////////////////// JOIN


// Array.prototype.myJoin = function(joinSymbol){
//     if(typeof joinSymbol !=='string'){
//         throw new TypeError('type ov symbol must be string!');
//     }
//     let symbolType = '';
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] !== undefined && this[i] !== null) {
//           symbolType += String(this[i]);
//         }
//         if (i < this.length - 1) {
//             symbolType += joinSymbol;
//           }
//     }
//     return symbolType;
// }
// let arrayNumbers = [1,2,3,4,5];
// let res = arrayNumbers.myJoin('-');
// console.log(res);