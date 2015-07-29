$(document).ready(main);

function main(){
	hideAll();
	/*
	* This section allows full scroll effect on viewport.
	*/
	$('#fullpage').fullpage({
		anchors: ['resume', 'education', 'skills', 'chart', 'soft_skills', 'contact'],
		menu: '#menu',
		css3: true,
		scrollBar: true,
		scrollingSpeed: 700
	});
	/*
	* This section makes the "Fade In" effect on the first section.
	*/
	listenerMenuToggle();
	$('#menu').fadeToggle(5000, "swing");
	$('.resume_content').fadeToggle(5000, "swing");

	
	/*
	* "Fade In" effect on sections
	*/
	listenerPanelToggle($('.educ_container'));
	listenerPanelToggle($('.skills_container'));
	listenerPanelToggle($('.chart_container'));
	listenerPanelToggle($('.soft_container'));
	listenerPanelToggle($('.contact_container'));
}	

function hideAll(){
	$('.resume_content').hide();
	$('.educ_container').hide();
	$('#menu').hide();
	$('.educ_container').hide();
	$('.skills_container').hide();
	$('.chart_container').hide();
	$('.soft_container').hide();
	$('.contact_container').hide();
}

function listenerMenuToggle() {
	$('.list_label_return').hide();
	$('.list_label_top').hide();
	$('.list_label_education').hide();
	$('.list_label_skills').hide();
	$('.list_label_chart').hide();
	$('.list_label_soft_skills').hide();
	$('.list_label_contact').hide();

	$('.list_icon_return').hover(function() {
  		$('.list_label_return').fadeToggle(1000, "swing");
	});
	$('.list_icon_top').hover(function() {
  		$('.list_label_top').fadeToggle(1000, "swing");
	});
	$('.list_icon_education').hover(function() {
  		$('.list_label_education').fadeToggle(1000, "swing");
	});
	$('.list_icon_skills').hover(function() {
  		$('.list_label_skills').fadeToggle(1000, "swing");
	});
	$('.list_icon_chart').hover(function() {
  		$('.list_label_chart').fadeToggle(1000, "swing");
	});
	$('.list_icon_soft_skills').hover(function() {
  		$('.list_label_soft_skills').fadeToggle(1000, "swing");
	});
	$('.list_icon_contact').hover(function() {
  		$('.list_label_contact').fadeToggle(1000, "swing");
	});
}

function listenerPanelToggle(target){
	target.bind('inview', function (event, visible) {
  		if (visible == true) {
  			$('.menu_label').css('color', '#000');
  			target.fadeIn(1000, "swing");
  		}else {
  			target.hide();
 		 }
	});
}

