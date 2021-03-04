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

// Photo Hover effect

        $('.col-md-3').hover(
            // trigger when mouse hover
            function(){
                $(this).animate({
                    marginTop: "-=2%",
                },200);
            },

            // trigger when mouse out
            function(){
                $(this).animate({
                    marginTop: "0%"
                },200);
            }
        );

        $('#search').click(function(){
            $("#search-box").css("display", "block")
        });
         $('#close-btn').click(function(){
            $("#search-box").css("display", "none")
        });

});

// get origin time 

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// Counter Numbers of Clients js effect

const counters = document.querySelectorAll('.counter');
const speed = 1000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});