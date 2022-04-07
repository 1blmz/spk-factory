$(document).ready(function(){
    $('.popup__close').click(function(e) {
        $('.popup, .overlayed, body').removeClass('active');
        return false;
    });
    $('.overlayed').click(function(e) {
        var target = e.target || e.srcElement;
        if(!target.className.search('overlay')) {
            $('.overlayed, .popup, body').removeClass('active');
        } 
    });	
    $('[rel=popup]').click(function(e) {
        showPopup($(this).attr('data-popup'));
        return false;
    });
});

function showPopup(el) {
	if($('.popup').is('.active')) {
		$('.popup').removeClass('active');	
	}
	$('.overlayed, body, .popup.'+el).addClass('active');
}