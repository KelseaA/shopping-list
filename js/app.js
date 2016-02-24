$(document).ready(function() {
	// use enter for submit
	$('#enter-item').keyup(function(event){
		if(event.keyCode == 13) {
			$('.add').click();
		};
	});	
	$(".add").click(function(){
		var toAdd = $("input[name=enterItem]").val();
		$("ul").append('<div class="list-item"><i class="fa fa-square-o"></i>' + '<li>' + toAdd + '</li>' + '<i class="fa fa-times-circle delete"></i></div>');
	});
	$(document).on("click", ".delete", function(){
		$(this).closest(".list-item").remove();
	});
});