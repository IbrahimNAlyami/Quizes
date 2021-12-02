// 1. Declare an array with your name. This array will save the position of each letter
//  (in English language i.e. 1-26) of your name. E.g. name ASD has 3 letters and have
//   position: 1, 19, 4 (the number of elements in array is same as letters of your name).
//    Get sum of values in the array above using any of the loops you like, and find the
//     remainder of the sum when it is divided by 4.

const ibrahim=[9,2,18,1,8,9,13];
sum=0;
rem=0;
console.log(sum+=ibrahim);
for(let i=0 ; i<ibrahim.length;i++){
  sum+=ibrahim[i]
  rem = sum%4
}
console.log(sum);
console.log(rem);


// 2. Based on your remainder in the above question, Choose one of the following APIs.

// 1. FishWatch API
// https://www.fishwatch.gov/api/species



fetch("https://www.fishwatch.gov/api/species")
  .then(response => response.json())
  .then(data => console.log(data));

// axios({
//     url: 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=25',
//     method: 'GET',
// }).then((response) => {
//     console.log(response.data);
// }).catch((err)=>{
//     console.log(err);
// })

// 3. Take at least five objects fetched from the above API call,
//  and save them in a local file named db.js. Create your local API with the following handles:
