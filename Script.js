
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  modifica();
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
function schimba(){
	for( var i=0;i<140;i++)
		setTimeout(function(){
				plusDivs(1);
			},3500*i);
}
schimba();

window.onload=function(){
	var sel=document.getElementById("op");
	var final=document.getElementById("finalizeaza");
	var inp=document.getElementById("rezervari");
	sel.onchange=function(){
		var n=sel.selectedIndex+1;
		for(var i=0;i<10;i++){
			var bt=document.createElement("button");
			bt.innerHTML=i+1;
			document.body.appendChild(bt);
			bt.className="verde";
			bt.id=i+1;
			bt.onclick=rezerva;
			
		}
	}
	function rezerva(){
		inp.value+=this.innerHTML+",";
		this.className="rosu";
		this.disabled=true;
		bt=document.getElementsByTagName("button");
		for(var i=1;i<=10;i++)
			 bt[i].disabled=true;
	}
	final.onclick=function(){
		alert("Ai acordat nota "+inp.value+'');
		inp.value="";
	}
}