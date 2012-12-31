// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function resetForm($form) {
	$form.find('input:text, input:password, input:file, select, textarea').val(
			'');
	$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr(
			'selected');
}

jQuery.ajaxSetup({
	'beforeSend' : function(xhr) {
		xhr.setRequestHeader("Accept", "text/javascript")
	}
})

jQuery.fn.submitWithAjax = function() {
	this.submit(function() {
		$("#cargando").show();
		$.post(this.action, $(this).serialize(), function() {
		}, "script");
		return false;
	})
	return this;
};

$(document).ready(function() {
	$("#delete").submitWithAjax();
	$("#new").submitWithAjax();
});

$( document ).tooltip();


$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.topbar').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.topbar').css({position: 'fixed', top: '0px'});
                        $('#maincontent').css('display', 'block');
                } else {
                        $('.topbar').css({position: 'static', top: '0px'});
                        $('#maincontent').css('display', 'none');
                }
        });
  });