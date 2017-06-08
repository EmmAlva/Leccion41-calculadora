$(function(){
	var screenVal = $("input:text");

	$('input:button').on('click',(e) =>{
		var eachNumber = $(this).val();
		var currentScreen = screenVal.val();
		currentScreen += eachNumber;
		screenVal.val(currentScreen);

		if($(this).val() == 'C'){
		screenVal.val("");
		}

	});

	$('button').click( (event) =>{
		event.preventDefault();
		screenVal.val(eval(screenVal.val()));
	});

	
	

});