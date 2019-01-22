/* script for index and projects*/
<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>
<script>
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
  });
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132894340-1"></script>

<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-132894340-1');
</script>
