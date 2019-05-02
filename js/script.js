/* script for index and projects*/


  $(document).ready(function() {
    $('.hamburger-btn').click(function() {
      if ($('.nav-mobile').css('display') == 'none') {
        $('.nav-mobile').slideDown('slow');
        $('body').css('overflow', 'hidden');
      } else {
		  $('#connect_btn').fadeToggle(500);
        $('.nav-mobile').slideUp('slow');
        $('body').css('overflow', 'auto');
      }
    });
	
	/* this is for connect button fadin */
	$('#connect').on('click',function(e){ 
		e.preventDefault();   
		$('#connect_btn').fadeIn(1000);
	});
  });
