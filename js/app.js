$(function(){
	//shows options on add button click
	$(".add").on("click", function(){
		$(".add-item").hide();
		$(".list-categories").hide();
		$(".add-options").show();
		//resets input value
		$("#add-item-name").val("");
	});

	//adds new item on submit click, hides options, shows full item list
	$(".submit").on("click", function(){
		//checks for item name input and category selection
		if(validateItemSubmit()){
			var itemName = $("#add-item-name").val();
			var categoryName = $(".selected").text();
			var category = $(".selected").attr("data-category");
			var $categoryDiv = $("#" + category);
			
			//builds item div to add
			var itemToAdd = '<div class="item">';
			itemToAdd += '<div id="checkbox"><i id="uncheck" class="fa fa-square-o pointer" aria-hidden="true"></i></div>';
			itemToAdd += '<div><p>' + itemName + '</p></div>';
			itemToAdd += '<div id="trash"><i class="fa fa-trash-o pointer" aria-hidden="true"></i></div>';
			itemToAdd += '</div>';

			$(".selected").removeClass("selected");
			
			//checks for existing h2 and appends a new one if none is found
			if($categoryDiv.children("h2").length == 0){
				$categoryDiv.append('<h2 class="category-name">' + categoryName + '</h2>');
			} 
			//adds item div to its specific category list
			$categoryDiv.append(itemToAdd);

			//hide options
			$(".add-options").hide();
			//show add item button and the grocery list
			$(".add-item").show();
			$(".list-categories").show();
		}
	});

	//closes option menu on cancel click
	$(".cancel").on("click", function(){
		$(".add-item").show();
		$(".list-categories").show();
		$(".add-options").hide();
	});

	//selects a category and gives it selected class
	$(".category-button").on("click", function(){
		//removes existing selected class and adds it to this
		$(".category-button").removeClass("selected");
		//toggles selected class
		$(this).toggleClass("selected");
	});


	//remove list item on trash click
	$(document).on("click", ".fa-trash-o", function(){
		var $categoryDiv = $(this).parent().parent().parent();
		//removes clicked item
		$(this).closest(".item").remove();
		//checks if any other items are in category, if not it removes category name
		if($categoryDiv.children(".item").length == 0){
			$categoryDiv.children("h2").remove();
		}
	});

	//toggles checkbox on click
	$(document).on("click", "#uncheck", function(){
		$(this).toggleClass("fa-square-o fa-check");
	});

	function validateItemSubmit() {
		var validated = true;
		$(".animated.shake").removeClass("animated shake");
		//validates item input and category selection
		if($("#add-item-name").val() == "") {
			$("#add-item-name").addClass("animated shake");
			validated = false;
		} 
		if(!$(".category-button").hasClass("selected")) {
			$("#categories-to-choose").addClass("animated shake");
			validated = false;
		}
		return validated;
	}
});



