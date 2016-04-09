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

function genProp () {
    var el = '<tr>'+
                '<td>'+randomNumberId()+'</td>'+
                '<td>'+randomNumberSq()+' Sq. Ft.</td>'+
                '<td>$'+randomNumberPrice()+' /sq.ft</td>'+
                '<td><button class="remove">Remove</button></td>'+
            '</tr>';
            
           $('table').append(el); 
}

function removeProp (self) {
    var el = $(self).parent().parent();
    console.log(el);
    $(el).remove();
}

$(document).ready(function(){
    
  $('.dir').on('click', '#gen', function(){
     genProp();
  }); 
  
  $('table').on('click', '.remove', function(){
     self = this;
     removeProp(self); 
  });  
    
    
});