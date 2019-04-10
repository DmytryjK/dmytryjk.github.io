/*Preloader*/
	$(window).on('load', function () {
	    $preloader = $('#preloader'),
	      $loader = $preloader.find('#loader');
	    $loader.fadeOut();
	    $preloader.delay(200).fadeOut('slow');
	  });