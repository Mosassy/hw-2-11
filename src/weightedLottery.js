export const weightedLottery = weights => {
   // keep track of your  weights
   // [‘green’, ‘yellow’, ‘yellow’, ‘red’, ‘red’, ‘red’]
   let picker = [];

   Object.keys(weights).forEach(key =>{
       for (let i = 0; i < weights[key]; i++) {
           picker.push(key);
       }
   });

   return picker[(Math.random() * picker.length) | 0];
   // return picker[Math.floor((Math.random() * picker.length))];
}

const weights = {
   winning: 1,
   losing: 1000
}

const weights2 = {
   green: 1,
   yellow: 2,
   red: 3
 };

weightedLottery(weights)
weightedLottery(weights2)

console.log(weightedLottery(weights));
console.log(weightedLottery(weights2));