function resetErrors(){
	$('form div p').addClass('hidden');
	$('form div input').css('border', '1px solid black');
}

function sendEmail(){

	var email = $('#email').val();
	var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
	var message = $('#message').val();
	var fullname = $('#fullname').val();

	if(fullname === ""){
		resetErrors();
		$('.client-name p').removeClass('hidden');
		$('.client-name input').css('border', '2px solid red')
	}
	else if(!pattern.test(email)){
		resetErrors();
		$('.client-email p').removeClass('hidden');
		$('.client-email input').css('border', '2px solid red')
	}
	else if(message === ""){
		resetErrors();
		$('.client-message p').removeClass('hidden');
		$('.client-message input').css('border', '2px solid red')
	}else{
		$.ajax('https://alizzens-services.herokuapp.com/sendEmail',
		{	
			beforeSend: function(){
				resetErrors();
				$('#msg-status').css('display', 'block');
				$('#submit-button').css('display', 'none');
			},
			type:"POST",
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			data:{
				message: message,
				email: email,
				fullname: fullname
			},

			success: function(a,b,c){
				$('form').css('display', 'none')
				$('#msg-status').css('display', 'none')
				$('.success').css('display', 'block');
			},

			error: function( xhr, status, errText ){
				$('form').css('display', 'none');
				$('#msg-status').css('display', 'none');
				$('.fail').css('display', 'block');
			}

		})
	}

	

}

function main(){
	$('form').submit(function (e) {
		e.preventDefault();
		sendEmail();
	});
}

$(document).ready(main);