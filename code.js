let userinput=document.getElementById("ui");
let gram=document.getElementById("gresuilt");
let kilogram=document.getElementById("kresuilt");
let ounces=document.getElementById("oresuilt");

userinput.addEventListener("input",(e)=>{
    let pounds=e.target.value;
   gram.innerHTML=pounds/0.0022046;
   kilogram.innerHTML=pounds/2.2046;
   ounces.innerHTML=pounds/16;
})