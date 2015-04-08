$(function () {

	$('input[type="submit"]').on('click', function () {

		var startHour = $('#start').val(),
			endHour = $('#end').val();

		if (startHour != "" && endHour != "") {
			var workHours = endHour - startHour,
				workHoursMath = (Math.round( workHours * 100 )/100),
				workHoursCompact = (workHoursMath).toFixed(1);
			
			$('.result').html(workHoursCompact + " Timer");
		}
	});

})

function AnimationEnd() {
	
}