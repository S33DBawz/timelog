$(function () {

	$('#start').on('input', function () {
		CalculateHours();
	});

	$('#end').on('input', function () {
		CalculateHours();
	});

})


function CalculateHours() {

	var startHour = $('#start').val(),
		endHour = $('#end').val();

	if (startHour != "" && endHour != "") {
		var workHours = endHour - startHour - 0.50,
			workHoursMath = (Math.round(workHours * 100) / 100),
			result = (workHoursMath).toFixed(1);

		$('.result h2').html(result);
	}

}