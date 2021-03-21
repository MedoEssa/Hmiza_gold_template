$(document).ready(function(){
    // Show password effect
        $('#check').click(function(){
	    if('password' == $('#test-input').attr('type')){
	         $('#test-input').prop('type', 'text');
	    }else{
	         $('#test-input').prop('type', 'password');
	    }
	});


        // Scroll to top effect

    function scroll_to_top(div) {
    $(div).click(function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
    $(window).scroll(function(){
        if($(window).scrollTop()<500){
            $(div).fadeOut();
        } else{
            $(div).fadeIn();
        }
    });
}

    scroll_to_top("#scroll-top");

        $('#search').click(function(){
            $("#search-box").css("display", "block")
        });
         $('#close-btn').click(function(){
            $("#search-box").css("display", "none")
        });
});



