// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
    topbar: {
        custom_back_text: true,
        back_text: '<i class="fi-arrow-left"> Volver</i>',
        is_hover: true,
        mobile_show_parent_link: false
    }
});

jQuery(document).ready(function () {

    /* aside menu */
    jQuery('#menu-slimscroll').navgoco();

    jQuery('#menu-slimscroll').slimScroll({
        height: '96%'
    });
    /* Fin aside menu */

    /* megadrop area */
    jQuery(".toggle-notifications").on("click", function(b){
        var c = jQuery(b.currentTarget);
        c.hasClass("open") ? (c.removeClass("open"), jQuery("#megadrop-notifications").slideUp(400)) : (c.addClass("open"), jQuery("#megadrop-notifications").slideDown(400))
    });

    jQuery(".toggle-messages").on("click", function(b){
        var c = jQuery(b.currentTarget);
        c.hasClass("open") ? (c.removeClass("open"), jQuery("#megadrop-messages").slideUp(400)) : (c.addClass("open"), jQuery("#megadrop-messages").slideDown(400))
    });
    /* Fin megadrop area */
});


(function (a) {
    a(function () {
        a(".toggle-nav").live("click", function (b) {
            var c = a(b.currentTarget);
            c.hasClass("open") ? (c.removeClass("open"), a("#megaDrop").slideUp(400)) : (c.addClass("open"), a("#megaDrop").slideDown(400))
        })
    })
})(jQuery);
