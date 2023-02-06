// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// I - html class name, and possibly one other param
// O - array of items with className
// C - Use document.body, element.childNodes, and element.classList
// E - None.

var getElementsByClassName = function(className, element) {
  // NOTE: Adding another parameter can help you solve this exercise!
  element = element || document.body;
  var result = [];

  if (element.classList !== undefined) {
    if (element.classList.contains(className)) {
      result.push(element);
    }
  }

  // if element has children
  if (element.childNodes !== undefined) {
    // iterate over document, for each child in element
    element.childNodes.forEach(function(child) {
      result = result.concat(getElementsByClassName(className, child));
    });
  }

  // return result;
  return result;

};
