function second_largest(nums) {//sb sy phly hum na second largest name sy function create kiya us main nums values[4,1,7,7,3] ko rkha 
 let largest = Math.max(...nums);//is main hum na ek alrgest value ka variable bnaya math .max rkha array main largest value find krna ky liya ...nums sperad operator use kiya yai araay ki values ko spread kr ky sperate vlaues bna deta hai 
  let second = null;//second variable ko null ki value di
    for (let i = 0; i < nums.length; i++) {//for loop use kiya array main values ko iterate krny k liya
         if (nums[i] < largest) {//if condition use kiya agar array ki value largest sy choti ho to
           if (second == null || nums[i] > second) {//if condition use kiya agar second null ho ya array ki value second sy badi ho to
                second = nums[i];//second variable main array ki value ko assign kr dia
 }
}
    }

    return second;//return second variable ko return kr dia
}

console.log(second_largest([4, 1, 7, 7, 3]));  //output 4
console.log(second_largest([5, 5, 5]));       //output null