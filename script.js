// Good Luck 💪🏾
 function sumTwoSmallestNums(num){
   let sum= num.sort((a,b)=>a-b)
    return sum[0]+sum[1]

 }
 console.log(sumTwoSmallestNums([12, 5, 24, 55, 18])) 
console.log(sumTwoSmallestNums([190, 300, 230, 800])) 