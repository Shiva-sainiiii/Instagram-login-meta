var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var btn = document.querySelector("#button");

input1.addEventListener("input", function(){
  if(input1.value !== "" && input2.value !== ""){
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = ".5";
  }
});

input2.addEventListener("input", function(){
  if(input1.value !== "" && input2.value !== ""){
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = ".5";
  }
});


