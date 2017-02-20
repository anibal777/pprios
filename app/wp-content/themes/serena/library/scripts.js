/*

Serena Scripts File
Author: Kanga Bell

*/

/* 
load gravatars if is above or equal to 768px 
*/

jQuery(document).ready(function($) {

    var responsive_viewport = $(window).width();
    
    if (responsive_viewport >= 768) {
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
    }
	
});

/* script ec */
popup = function(t, e) {
    e.preventDefault();
    var $t = t, _href = "";

    if ($t.getAttribute('href')) _href = $t.getAttribute('href');
    else _href = $t.getAttribute('href');
    window.open(_href,'gec_popup','width=500,height=450,menubar=no,status=no,location=no,toolbar=no,scrollbars=yes,directories=no');
}