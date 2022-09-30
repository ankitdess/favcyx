$(document).ready(function() {
    "use strict";
    // Add smooth scrolling to all links
    $("a").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll The optional number
            // (800) specifies the number of milliseconds it takes to scroll to the
            // specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });

    // $('.navmenu').on('click','li',function(){
    //     $('.navmenu li.mega-menu').removeClass('enterprise-mobile-icon-content');
    //     $(this).addClass('color-pink');
    // })

    $('.navmenu').on('click','li',function(){
        $('.navmenu li.current ').removeClass('current');
        $(this).addClass('current');
    })

      $('.navmenu').on('click','li',function(){
        $('.navmenu').removeClass('d-block');
        //$(this).addClass('collapse');
    })

    $('.ewebinar__Widget').attr("z-index", "9999 !important");

});
