function randomNumberId(){
	var min=1000;
	var max=9999;
 	return Math.floor(Math.random() * (1 + max - min) + min);
 }

  function randomNumberSq(){
  	var min=500;
  	var max=5000;
	return Math.floor(Math.random() * (1 + max - min) + min);
}
   function randomNumberPrice(){
	var min=10;
	var max=30;
	return Math.floor(Math.random() * (1 + max - min) + min);
 }



$(document).ready(function(){
    
  $('.dir').on('click', '#gen', function(){
     console.log('working'); 
  }); 
    
    
    
});