var listElement = document.getElementsByClassName("nvPanel");

var mouseon = function(event){
	event.target.style.boxShadow = "4px 6px 10px 4px #aaaaaa";
	event.target.style.fontWeight = "bold";
};

var mouseoff = function(event){
	event.target.style.boxShadow = null;
	event.target.style.fontWeight = null;
};

for(elem of listElement){
	elem.onmouseover = mouseon;
};

for(elem of listElement){
	elem.onmouseout = mouseoff;
};
