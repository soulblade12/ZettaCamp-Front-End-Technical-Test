// Expected Result = 7
// Direction : Find median of this array
const input = [29, 19, 21, 52, 91, 50, 82, 65, 53, 84, 51, 90, 93];

function result(input) {
  var temp = input.sort();
  var jml = temp.length; 

  if (jml%2===0) {
    return Math.floor((input[jml/2] + input[(jml/2)+1])/2);
  }else {
    return input[(jml-1)/2];
  }
}

console.log(result(input));