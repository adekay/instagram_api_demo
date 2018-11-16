(function () {
    'use strict';
    /*jslint browser: true*/
    /*eslint-env browser*/

    /* code section for menu color change on scroll */

    $(document).scroll(function () {
        if ($(this).scrollTop() < $('#main-nav').height()) {
            $('#main-nav').css({
                'background-color': 'transparent',
                'box-shadow': 'none'
            });
        } else {
            $('#main-nav').css({
                'background-color': '#FFFFFF',
                'box-shadow': '2px 0 5px rgba(0, 0, 0, 0.5)'
            });
        }
    });

    /* code section for menu color change on scroll end */

}());