$(document).ready(function() {
	// use enter for submit
	$('#enter-item').keyup(function(event){
		if(event.keyCode == 13) {
			$('.add').click();
		};
	});	
	// adds list items
	$('.add').click(function(){
		var toAdd = $('input[name=enterItem]').val();
		if($('#enter-item').val() == 0){
			alert("Please enter an item to add to the list");
		}
		else {
		$('ul').append('<div class="list-item"><i id="uncheck" class="fa fa-square-o"></i>' + '<li>' + toAdd + '</li>' + '<i class="fa fa-times-circle delete"></i></div>');
		// resets text box
		$('input:text').val('');
		};
	});
	// removes list items
	$(document).on('click', '.delete', function(){
		$(this).closest('.list-item').remove();
	});
	// toggles check box
	$(document).on('click', '#uncheck', function(){
		$(this).toggleClass("fa-square-o fa-check-square");
	});
});



