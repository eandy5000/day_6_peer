$(document).ready(function(){
var i=0;
console.log("hi");
// makes generate button
$('#container').append("<button class='generateButton'>Generate Property</button>");

$("#container").on('click', '.generateButton', function(){
	
var el = "<div class='newProperty'>" + 
					"<div>Property ID: " + randomNumberId() + "</div>" +
					"<div>Sqft: " + randomNumberSq() + "</div>" +
					"<div>Cost/sqft : $ " + randomNumberPrice() + "</div>" +
					"<div><button class='removeButton'>Remove</button></div>"
					"</div>";

console.log("pathway ",$('.newProperty').last());
$('#container').append(el);
var $el=$('#container').children().last();
$el.hide().slideDown("fast");

console.log($(this));

i++;

});



$('#container').on('click', '.removeButton', function(){

$(this).parent().parent().slideUp();

});



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







});


// var el = 	"<div class='newProperty'>" +
// 					"<div>Property ID : " + propertyID + "</div>" +
// 					"<div>" + propertyArea + " Sq. Ft.</div>" +
// 					"<div>$" + propertyValue + " / sq.ft.</div>" +
// 					"<div><button class='removeButton'>Remove</button></div>"
// 				"</div>";

// $('#customerList').append(el);

// //from Style.css
// .newProperty {
// 	width: 700px;
// 	margin: 0 auto;
// }

// .newProperty div {
// 	text-align: center;
// 	width: 25%;
// 	height: 30px;
// 	display: inline-block;
// }