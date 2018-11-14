(function () {
    'use strict';
    /*jslint browser: true*/
    /*eslint-env browser*/
    /*global $*/

    /* code for menu color change on scroll */
    $(document).scroll(function () {
        if ($(this).scrollTop() < $('#main-nav').height()) {
            $('#main-nav').css('background-color', 'transparent');
            $('#main-nav').find('.navbar-nav').removeClass('ml-auto');
            $('#main-nav').css('box-shadow', 'none');
        } else {
            $('#main-nav').css('background-color', '#FFFFFF');
            $('#main-nav').find('.navbar-nav').addClass('ml-auto');
            $('#main-nav').css('box-shadow', '2px 0 5px rgba(0, 0, 0, 0.5)');

        }
    });
    /* code for menu color change on scroll */

}());