

setTimeout(function(){
	var couleur = prompt("Please enter a color");
  document.getElementById("p").style.backgroundColor=couleur;
}, 3000);




function bold(){
	
	 document.getElementById("p").classList.toggle("boldStyle");
}
function italic(){      
 
	document.getElementById("p").classList.toggle("italicStyle");

} 
function underline(){
	document.getElementById("p").classList.toggle("underlineStyle");
}
function pfont(){
  var x= document.getElementById("pf").value;
  document.getElementById("p").style.fontFamily =x;
}
function sfont(){
  var x= document.getElementById("ps").value;
  x=x+"px";
  document.getElementById("p").style.fontSize =x;
}

