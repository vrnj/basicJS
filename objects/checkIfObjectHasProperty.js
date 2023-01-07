function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  

  // return obj.hasOwnProperty(checkProp) ? obj[checkProp] :"Not Found";
}