//Check. If it is 'Firefox'
if(navigator.userAgent.indexOf('Firefox') >= 0){
  
}
//Check. If it is 'Safari'
else if((/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))){

}
else{
  var headHTML = document.getElementsByTagName('head')[0].innerHTML;
  headHTML    += '';
}