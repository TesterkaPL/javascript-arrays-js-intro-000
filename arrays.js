var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  //var array = [1]
  return array = ['foo',  ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array;
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var array = [1]
  return array = [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element){
  return array = [...array, 'foo']
}

function accessElementInArray(array, index){
  return array[2]
}

function destructivelyAddElementToBeginningOfArray(array){
  var array = ['1', '2']
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){

}
