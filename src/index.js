
exports.min = function min (array) {
  if (isBad(array))
    return Math.min(...array);
  return 0 
}

exports.max = function max (array) {
  if (isBad(array))
    return Math.max(...array);
  return 0
}

exports.avg = function avg (array) {
  if (isBad(array))
    return array.reduce((a,b) => a + b, 0) / array.length;
  return 0
}

function isBad(array){
  return (array && array.length)
}