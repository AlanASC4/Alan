var array = [17,3,12,14,7,20,4,35,10];
var maxNum = 0;

function getMaxOfArray(array) {
  return Math.max.apply(null, array);
}
getMaxOfArray(array);

for(var i = 0; i < array.length; i ++){
    getMaxOfArray(array);
}
