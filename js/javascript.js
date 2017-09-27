$(document).ready(function() {
 
    $('#team').mouseenter(function() {
    	$('span#team2').fadeOut(0, function() {
    		$('span#team2').text("Coming soon...");
    	});
    	
    	$('span#team2').fadeIn(1000);
    });
    $('#team').mouseleave(function() {
    	$('span#team2').fadeOut(0, function() {
    		$('span#team2').text("Team");
    	});
    	
    	$('span#team2').fadeIn(1000);
    });

     $('#sponsorship').mouseenter(function() {
    	$('span#sponsorship2').fadeOut(0, function() {
    		$('span#sponsorship2').text("Coming soon...");
    	});
    	
    	$('span#sponsorship2').fadeIn(1000);
    });
    $('#sponsorship').mouseleave(function() {
    	$('span#sponsorship2').fadeOut(0, function() {
    		$('span#sponsorship2').text("Sponsorship");
    	});
    	
    	$('span#sponsorship2').fadeIn(1000);
    });
});