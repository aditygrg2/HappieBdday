/** 
 * https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
 */

 $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

setInterval( function () {
    if ( $('span').last().isInViewport() ) {
        $('span').last().clone().insertAfter( $('span').last() );
    }
    if(window.screenY>100){
        clearInterval(interval);
    }
}, 200);

$(window).on('resize scroll', function() {
    var interval  = setInterval( function () {
        if ( $('span').last().isInViewport() ) {
            $('span').last().clone().insertAfter( $('span').last() );
        }
    }, 200);    
});
