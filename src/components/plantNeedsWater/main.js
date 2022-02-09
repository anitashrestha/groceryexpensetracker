const plantNeedsWater = (day) => {
   if(day === 'Wednesday'){
     return true;
     }else{
       return false;
     }
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

//Refactored above code
// const plantNeedsWater = day => day === 'Wednesday' ? true : false;
// console.log(plantNeedsWater);