// external js: packery.pkgd.js, draggabilly.pkgd.js

var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  columnWidth: 100,
  gutter:0
});

// make all grid-items draggable
$grid.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});


$grid.on( 'click', '.grid-item', function( event ) {
  // change size of item by toggling large class
  $(  event.currentTarget  ).toggleClass('grid-item--large');
  // trigger layout after item size changes
  $grid.packery('layout');
});



// window.addEventListener('DOMContentLoaded', function () {
// 	loadData();
// });


// function loadData() {
// 	$.getJSON("data.json", function (data) {


// 		for (var i = 0; i < data.length; i++) {
// 			console.log(data[i]);
// 		}

// 		generateWebsites(data);

// 	});
// }


// function generateWebsites(data) {


// 	let source = $("#websites-template").html();
// 	let template = Handlebars.compile(source);
// 	let result = template(data);
// 	let list = $('.websites-list');
// 	list.append(result);

// }
