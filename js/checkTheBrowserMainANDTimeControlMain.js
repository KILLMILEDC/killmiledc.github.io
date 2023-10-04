var userAgent = navigator.userAgent;
//Check. If it is 'Edge'
if(userAgent.indexOf('Edge') != -1){
  var date = new Date();
  var h = date.getHours();
  if(h >= 6 && h <= 18){
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pDay.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
  }
  else {
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pNight.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
  }
}
//Check. If it is 'IE'
// if(userAgent.indexOf('IE') != -1){

// }
//Check. If it is 'Safari'
// else if((/Safari/.test(userAgent) && !/Chrome/.test(userAgent))){
//   var date = new Date();
//   var h = date.getHours();
//   if(h >= 6 && h <= 18){
//     var headHTML = document.getElementsByTagName('head')[0].innerHTML;
//     headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pDayIndex.css">';
//     document.getElementsByTagName('head')[0].innerHTML = headHTML;
//   }
// }
//Check. If it is 'Chrome'
else if(userAgent.indexOf('Chrome') != -1){
  var date = new Date();
  var h = date.getHours();
  if(h >= 6 && h <= 18){
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pDay.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
  }
  else {
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pNight.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
  }
}
else{
  var date = new Date();
  var h = date.getHours();
  if(h >= 6 && h <= 18){
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pDayCompatible.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
  }
  else {
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '    <link rel="stylesheet" href="css/StylePc1080pNightCompatible.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
  }
}