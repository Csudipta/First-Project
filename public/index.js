
$(document).ready(function() {
	$( "#myform" ).submit(po);

	function po(e) {
		console.log($("#textbox1").val());
		
		e.preventDefault();
		var fn = $('#textbox1').val();
		$("#list1").append('<li>' +fn+ '</li>');
		$("#textbox1").val('');

	}

});