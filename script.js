///1. find
function find(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num && typeof num === "number") {
      return i;
    }
  }
  return null;
}

///2. foreach
function forEach(arr, func) {
  var i = 0;
  while (i < arr.length) {
    func(arr[i], i);
    i = i + 1;
  }
}

// forEach([1, 2, 3], function (val, i) {
//   alert(val);
// });

///3. findIndex
function findIndex(arr, func) {
  var i = 0;
  while (i < arr.length) {
    if (func(arr[i])) {
      return i;
    }
    i++;
  }
  return -1;
}

// alert(
//   findIndex([1, 2, 3, 4, 0], function (val) {
//     return val === 0;
//   })
// );

///4. push
function push(arr, value) {
  var newArray = [];
  var i = arr.length;
  for (var i = 0; i < arr.length; i++) {
    newArray[i] = arr[i];
  }
  newArray[i] = value;
  return newArray;
}

//5. pop
function pop(arr) {
  var result;
  var newArray = [];
  var last = arr.length;
  for (var i = 0; i < arr.length; i++) {
    if (i !== last - 1) {
      newArray.push(arr[i]);
    } else {
      result = arr[i];
    }
  }
  return result;
}

//6. includes
function includes(arr, val) {
  var result = false;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === val) {
      result = true;
    }
  }
  return result;
}

//7. filter
function filter(arr, value) {
  var newArry = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      newArry.push(arr[i]);
    }
  }
  return newArry;
}
