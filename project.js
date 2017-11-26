$(document).ready(
	function() {
//modal function
	$(".modal-trigger").click(function(e){
	  e.preventDefault();
	  dataModal = $(this).attr("data-modal");
	  $("#" + dataModal).css({"display":"block"});
	});

	$(".close-modal, .modal-sandbox").click(function(){
		$(".modal").css({"display":"none"});
	});

	$.getJSON("https://api.spacexdata.com/v2/launches/latest",  
		function(data){
			console.log(data)
			$('#flight_number').html(data.flight_number)
			$('#launch_year').html(data.launch_year)
			$('#launch_success').html(data.launch_success)
			$('#details').html(data.details)
			$('#rocket_id').html(data.rocket.rocket_id)
			$('#rocket_name').html(data.rocket.rocket_name)
			$('#rocket_type').html(data.rocket.rocket_type)
			$('#article_link').attr('href', data.links.article_link)
			$('#mission_patch').html(data.links.mission_patch)
			var link = data.links.video_link.replace('watch?v=','embed/')
			$('#video').attr('src', link)
			$('#image').attr('src',data.links.mission_patch)
		
		})
})
