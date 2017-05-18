$(document).ready(function() {

	// Function that will display images from the rovers
	function roverData(name, sol) {
		var sol = $("#sol-selector").val();
		$.ajax({
			url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + name.toLowerCase() +'/photos?sol='+ sol +'&api_key=u8vY57tt0UKbMXetRwOIfrBM7CMDI2eSTurQAJ72',
			method: "GET",
		})
		.done(function(response) {
			console.log(response);
			displayImages(response);
		});
	}

	function displayImages(response) {
		$('#roverImages').empty();

		  for (var i =0; i < 9; i++) {
		    var li = $('<li>');
		    var image = $('<img src=' + response.photos[i].img_src + '>').addClass( "image-popup" );

		    li.append(image);

		    $("#roverImages").append(li);
		}
	}

	function solDays(response) {
		$("#sol-date").attr('max', response.photo_manifest.max_sol); // !!!! res was not defined !!!!
	}

	$("#button").on('click', function() {
	    $('html, body').animate({
	        scrollTop: $("#main-layout").offset().top
	    }, 2000);
	});

	$("#apodButton").on('click', function() {
	    $('html, body').animate({
	        scrollTop: $("#apod-layout").offset().top + 1000
	    }, 2000);
	});

	$("#curiosity").on("click", function() {
		roverData("curiosity");
	});

	$("#spirit").on("click", function() {
		roverData("spirit");
	});

	$("#opportunity").on("click", function() {
		roverData("opportunity");
	});

	$("#sol-selector").on('change', function() {
		$("#sol-date").text($(this).val())
	});

	audiojs.events.ready(function() {
		var as = audiojs.createAll();
	});

});

