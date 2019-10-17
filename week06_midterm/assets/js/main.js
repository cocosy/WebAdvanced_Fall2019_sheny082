window.addEventListener('DOMContentLoaded', function () {
	loadData();

});


function loadData() {
	$.getJSON("../data_02.json ", function (data) {


		for (var i = 0; i < data.length; i++) {
	
		}

		generateWebsites(data);
	});
}


function generateWebsites(data) {

			console.log("hiiii");
	let source = $("#websites-template").html();
	let template = Handlebars.compile(source);
	let result = template(data);
	let list = $('.websites-list');
	list.append(result);

}






// var elem = document.querySelector('.grid');
// var pckry = new Packery( elem, {
//   // options
//   itemSelector: '.grid-item',
//   gutter: 10
// });

// // element argument can be a selector string
// //   for an individual element
// var pckry = new Packery( '.grid', {
//   // options
// });


// var $grid = $('.grid').packery({
//   itemSelector: '.grid-item',
//   columnWidth: 100
// });

// // make all grid-items draggable
// $grid.find('.grid-item').each( function( i, gridItem ) {
//   var draggie = new Draggabilly( gridItem );
//   // bind drag events to Packery
//   $grid.packery( 'bindDraggabillyEvents', draggie );
// });




// var $grid = $('.grid').packery({
//   itemSelector: '.grid-item'
// });

// $grid.on( 'click', '.grid-item', function( event ) {
//   // change size of item by toggling large class
//   $( event.currentTarget ).toggleClass('grid-item--large');
//   // trigger shiftLayout after item size changes
//   $grid.packery('shiftLayout');
// });






