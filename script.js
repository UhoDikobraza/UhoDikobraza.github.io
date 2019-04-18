var listElement = document.getElementsByClassName("nvPanel");

var mouseon = function(event){
	event.target.style.boxShadow = "4px 6px 10px 4px #aaaaaa";
};

var mouseoff = function(event){
	event.target.style.boxShadow = null;
};

for(elem of listElement){
	elem.onmouseover = mouseon;
};

for(elem of listElement){
	elem.onmouseout = mouseoff;
};
