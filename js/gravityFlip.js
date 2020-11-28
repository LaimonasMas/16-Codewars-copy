/*
https://www.codewars.com/kata/5f70c883e10f9e0001c89673
*/

// SITA FUNKCIJA NEVEIKIA!!!
// const flip=(d, a)=>{
//     const sorted = a.sort((sk1, sk2) => sk1 - sk2);

//     if (d === 'L'){
//         return a.sort().reverse();
//     }
//     if (d === 'R') {
//         return a.sort();
//     }
//     return sorted;
//   } 

const flip = (d, a) => {
    const array = a;
    let answer = [];
    if ( d === 'R') {
    answer = array.sort((sk1, sk2) => sk1 - sk2);
    return answer;
    }
    if ( d === 'L') {
      answer = array.sort((sk1, sk2) => sk1 - sk2).reverse();
      return answer;
    }
  }





  console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
  console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);


  
//   const flip = (d, a) => {
//     const sorted = a.sort((sk1, sk2) => sk2 - sk1);
//     return d === 'R' ? sorted : sorted.reverse();
// }