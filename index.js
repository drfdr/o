var cdmimg = document.getElementsByClassName("cdmimg")[0];
var mimg = document.getElementsByClassName("mimg")[0];
var mimgx = document.getElementsByClassName("mimgx")[0];
var imginput = document.getElementsByClassName("imginput")[0];
var plus = document.getElementsByClassName("plus")[0];
var save = document.getElementsByClassName("save")[0];
var close = document.getElementsByClassName("close")[0];
var mimgmodal = document.getElementsByClassName("mimgmodal")[0];
var settings = document.getElementById("settings");

plus.onclick = function() {
    imginput.style.display="block";
    plus.style.display="none";
    save.style.display="block";
    close.style.display="block";
    settings.style.display="none";
}

close.onclick = function() {
	 imginput.style.display="none";
    plus.style.display="block";
    save.style.display="none";
    close.style.display="none";
    settings.style.display="block";

}

save.onclick = function(){
    settings.style.display="block";
    mimg.style.display="block";
    mimg.style.opacity="1";
    imginput.style.display="none";
    plus.style.display="none";
    save.style.display="none";
    close.style.display="none";
    mimg.src=(imginput.value);
    localStorage.setItem('src',imginput.value);
}

settings.onclick = function(){
    imginput.style.display="block";
    plus.style.display="none";
    save.style.display="block";
    close.style.display="block";
    mimg.style.opacity="0.2"; 
}

mimg.onclick = function(){
    mimgmodal.style.display="block";

}

$(document).not('.mimgmodal').click(function() {
   mimgmodal.style.display="none";
});

imginput.value = localStorage.getItem('src');


