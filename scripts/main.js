$(document).ready(function() {
  $("img").unveil(250, function() {
	  $(this).load(function() {
	    this.style.opacity = 1;
	  });
  });
});