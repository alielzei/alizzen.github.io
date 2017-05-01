function sendEmail(){

	$.ajax('https://alizzens-services.herokuapp.com/sendEmail',
	{
		type:"POST",
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		data:{
			message: $('#message').val(),
			email: $('#email').val(),
			fullname: $('#fullname').val()
		},

		success: function(a,b,c){
			$('form').css('display', 'none')
			$('.success').css('display', 'block');
		},

		error: function( xhr, status, errText ){
			$('form').css('display', 'none')
			$('.fail').css('display', 'block');
		}

	})
}

function main(){
	$('form').submit(function (e) {
		e.preventDefault();
		sendEmail();
	});
}

$(document).ready(main);