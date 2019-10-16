//Essentially, rearrange the digits to create the highest possible number.
//Example: Input: 21445 Output: 54421

function sortInteger(number){
  let array = number.toString().split('');
  let arrayOfNumbers =array.sort().reverse()
  let sortNum = arrayOfNumbers.join('')
  
return parseInt(sortNum)
}
sortInteger(483965)
