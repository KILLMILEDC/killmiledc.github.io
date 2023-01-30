document.onreadystatechange = function(){
  if(document.readyState === "complete"){
    $(".load").fadeOut();
  }
}