
window.addEventListener ('DOMContentLoaded', function(){
	//find side Nav in html attach it into html but not working ?
	// let sideNav = $("#mySideNav");
	// addLinks(sideNav);

	let sideNav = document.getElementById('mySideNav');
	addLinks(sideNav);


	//call the animation
	scrollAnimation();

	//let navOffset = $('nav').offset().top;
	//offset() jquery

	//JS:
	// let navOffset = document.getElementById('nav');S
	// let topPos =  navOffset.offsetTop;

	// Jquery
let navOffset= $("nav").offset().top; 

	//console.log(navOffset);



// 01 nav bar follow when you scroll
// detect the position that you scroll to
$(window).scroll(function(){



	let scrollPos = $(window).scrollTop();
	console.log(scrollPos);
 

	let stickNav = $("nav"); // class 
	stickyMenu(stickNav);

	let stickMenu = $(".menubar");// ID both declare function
	stickyMenu(stickMenu);


	function stickyMenu(stick){
		if(scrollPos >= navOffset){
			stick.addClass("fixed");
		}
		else{
			stick.removeClass("fixed");
		}
	}





//02 text appear when scroll to certain section

	let sectionTwo = $('#place').offset().top;

	if(scrollPos>=sectionTwo-100){
		$('.t2').addClass('appear'); //class thus add . dot

	}else{
		$('.t2').removeClass('appear');
	}


});

});

// 03 hamburger bar 

function openNav(){
	$("#mySideNav").addClass("openMenu");

}

function closeNav(){
	$("#mySideNav").removeClass("openMenu");
}


//04 links in the hamburger bar 
function addLinks(apples){ //parameter
	apples.innerHTML += "<a href='#home'>Home</a> ";
	// apples.innerHTML += "<a href="about.html">About</a> ";
	// apples.innerHTML += "<a href="add.html">+add</a> ";

}


//05 animation

function scrollAnimation(){
	$('a').click(function(){

		let myTarget = $(this.hash); // my target =  the value of the hashtag of the thing clicked; the ID
		myTarget = myTarget.length && myTarget; 

		let targetOffset = myTarget.offset().top;
		$("html,body").animate({scrollTop: targetOffset}, 1000);



	});
}




