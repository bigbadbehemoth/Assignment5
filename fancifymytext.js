//Bigger button definition
biggerBtn = document.getElementById("bigger");

//Moo button definition
mooBtn = document.getElementById("moo");

//Textarea definition
t = document.getElementById("userText")

//Bigger button function
function bigger(){
    alert("Hello, world!");
    t.style.fontSize = "2em";
};

//Moo button function
function moo(){
    var str = t.value
    var parts = str.split(".");
    str = parts.join("-Moo.");
    t.value = str;
}

//Style change alert function
function styleChange(){
    alert("Font style updated!");
}

//Fancify button function
function fancify(){
    t.style.fontWeight = "bold";
    t.style.color = "blue";
    t.style.textDecoration = "underline";
}

//Boring button function
function boringbetty(){
    t.style.fontWeight = "initial";
    t.style.color = "initial";
    t.style.textDecoration = "initial";
}