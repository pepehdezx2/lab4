$('#add').click(function(event){
	event.preventDefault();
	var todoText = $('input').val();
	if(todoText === ""){
		alert("Sorry, you can't leave a blank space");
	}
	else{
		$('ul').append('<li class="cc"> <p class="bold">' + todoText + '</p> <div class = "cont"> <button class="check"> check </button> <button class ="delete"> delete </button> </div> </li>');
	}
});

$('div').on('click', '.delete', function(event){
	event.preventDefault();
	$(this).parent().parent().remove();
});

$('div').on('click', '.check', function(event){
	event.preventDefault();
	$(this).parent().parent().toggleClass("done");
});