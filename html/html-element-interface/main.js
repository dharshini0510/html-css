let btn = document.getElementById("helpButton");
let info = document.getElementById("info");

btn.onclick = function () {
  info.innerHTML = "Assigned Access Key: " + btn.accessKey + "<br>" +
                   "Shortcut Key Combo: " + btn.accessKeyLabel;
};

const element = document.getElementById("el");
const output = document.getElementById("output");
output.textContent = element.attributeStyleMap.get("color");

let input = document.querySelector("input");
const op = document.getElementById("op");
let befor= input.autoCapitalize;
input.autoCapitalize = "characters";
op.textContent="The autoCapitalize has been changed from " + befor+ " to "+ input.autocapitalize;

let acorrect=input.getAttribute("autocorrect"); 
if(acorrect==="on"){
    input.setAttribute("autocorrect", "off");
}
else{
    input.setAttribute("autocorrect", "off");
}
console.log("Autocrrect has been changed from "+ acorrect+ " to "+ input.getAttribute("autocorrect"));

input.autofocus = true;
console.log(input.autofocus);

let box = document.getElementById("box");
console.log(box.innerText); 
console.log(box.innerHTML); 
console.log(box.textcontent); 

let txt = document.getElementById("msg");
let op1 = document.getElementById("output1");
op1.innerText = "Spellcheck is " + (txt.spellcheck ? "ON" : "OFF");

 function changeStyle() {
    let box2 = document.getElementById("box2");
    box2.style.color = "red";
    box2.style.fontSize = "20px";
  }

  let p = document.getElementById("titlePara");
    p.title = "New Title has been set!";

 let el1 = document.getElementById("greeting");
    el1.outerText = "Goodbye!";

let el2 = document.getElementById("brand");
    let res = el2.translate ? "Yes, can be translated" : "NO, will not be translated";
    document.getElementById("result").innerText = res;