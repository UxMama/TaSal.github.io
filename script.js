/* script for index and projects*/
 $(document).ready(function() {
   $('.hamburger-btn').click(function() {
     if ($('.nav-mobile').css('display') == 'none') {
       $('.nav-mobile').slideDown('slow');
       $('body').css('overflow', 'hidden');
     } else {
       $('.nav-mobile').slideUp('slow');
       $('body').css('overflow', 'auto');
     }
   });
   $('.nav-mobile a').click(function() {
     $('body').css('overflow', 'auto');
   });
 });
