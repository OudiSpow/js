var ul = document.getElementById("ul");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var button = document.getElementById("button");


ul.style.display = "flex";
ul.style.justifyContent = "center";
ul.style.alignItems = "center";
ul.style.height = "100vh";

var firstcolor = "red";
var widthHeight = "200px"


first.style.listStyle = "none";
first.style.height = widthHeight;
first.style.width = widthHeight;
first.style.background = firstcolor;


second.style.listStyle = "none";
second.style.height = widthHeight;
second.style.width = widthHeight;
second.style.background = "blue";


third.style.listStyle = "none";
third.style.height = widthHeight;
third.style.width = widthHeight;
third.style.background = "green";

//////////////////////////////////////////////

first.onclick = function(){
    first.style.background = "yellow";
}

second.onclick = function(){
    second.style.display = "none";
}

third.onclick = function(){
    third.style.height = "400px";
    third.style.width = "400px";
}


button.onclick = function(){
    second.style.display = "initial";
    first.style.background = firstcolor;
    third.style.height = "200px"
    third.style.width = "200px"
    
}



