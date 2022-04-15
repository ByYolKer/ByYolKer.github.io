'use strict';
let videos = document.getElementById('myVideo');



// fonction : affichage d'une image dans un div
function ShowBigImage(divId,imageRepNom,divId2,imageLegende){
  // divId : id du div qui va contenir la grande image
  // imageNom : chemin + nom de la grande image
  // on met l'image dans le div
  document.getElementById(divId).innerHTML = '<img src="'+imageRepNom+'" alt="" />';
  document.getElementById(divId2).textContent = imageLegende;
}	



function ShowBigVideo(divId){
  // divId : id du div qui va contenir la grande image
  // imageNom : chemin + nom de la grande image
  // on met l'image dans le div
  document.getElementById(divId).innerHTML =   '<video autoplay muted loop><source type="video/mp4" src="image/site.mp4"/></video>'

  videos.play();
}



// fonction : vidage du contenu d'un div
function HideBigImage(divId,divId2){
  // divId : id du div à vider
  document.getElementById(divId).innerHTML = ''; // on vide le div
  document.getElementById(divId2).innerHTML = ''; // on vide le div
}


function ShowBigTexte(divId){
  // divId : id du div qui va contenir la grande image
  // imageNom : chemin + nom de la grande image
  // on met l'image dans le div
  document.getElementById(divId).innerHTML = '<h style="font-size: 100%;">06 41 56 22 40</h>'    
}	

function ShowBigTexte2(divId){
  // divId : id du div qui va contenir la grande image
  // imageNom : chemin + nom de la grande image
  // on met l'image dans le div
  document.getElementById(divId).innerHTML = '<h style="font-size: 100%;">aurejd33@gmail.com</h>'    
}	 