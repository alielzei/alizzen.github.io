function sendEmail(){
	var html = "<h3>Email</h3>"+$('#email').val()
						+"<h3>Full Name</h3>"+$('#fullName').val()
						+"<h3>Message</h3>"+$('#message').val()

	$.ajax('https://api.mailgun.net/v3/sandboxcfcb1e9845b74255905573f6ccae0a64.mailgun.org/messages',
	{
		type:"POST",
		username: 'api',
		password: 'key-3edaaabb8c757541b8d89271791949ee',
		data:{
			"from": $('#email').val()+" <postmaster@sandboxcfcb1e9845b74255905573f6ccae0a64.mailgun.org>",
			"to": "Ali <alielzein753@gmail.com>",
			"subject": 'Portfolio Feedback',
			"html": html,
		},

		success: function(a,b,c){
			console.log( 'mail sent: ', b );
			$('form').css('display', 'none')
			$('.success').css('display', 'block');
		}.bind(this),

		

		error: function( xhr, status, errText ){
			$('form').css('display', 'none')
			$('.fail').css('display', 'block');
		}

	})
}

function main(){
	$('form').submit(function () {
		sendEmail();
		return false;
	});
}

$(document).ready(main);