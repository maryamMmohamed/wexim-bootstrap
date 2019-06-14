// var timer;

// var compareDate = new Date();
// compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

// timer = setInterval(function() {
//   timeBetweenDates(compareDate);
// }, 1000);

// function timeBetweenDates(toDate) {
//   var dateEntered = toDate;
//   var now = new Date();
//   var difference = dateEntered.getTime() - now.getTime();

//   if (difference <= 0) {

//     // Timer done
//     clearInterval(timer);
  
//   } else {
    
//     var seconds = Math.floor(difference / 1000);
//     var minutes = Math.floor(seconds / 60);
//     var hours = Math.floor(minutes / 60);

//     hours %= 24;
//     minutes %= 60;
//     seconds %= 60;

//     $("#hours").text(hours);
//     $("#minutes").text(minutes);
//     $("#seconds").text(seconds);
//   }
// }


// //////////////////////////////////////////
// $('#blogCarousel').carousel({
//   interval: 2000
// });

// //////////////////////////////////////////

// $(window).on("load", function () {
//   $(".loading-overlay .spinner").fadeOut(1000, function () {
//     $(this).parent().fadeOut(5000, function () {
//       $("body").css("overflow", "auto");
//       $(this).remove();
//     });
//   });
// });


//////////////////////////////////////////////////


//caching the scroll top element
var scrollButton = $("#scroll-top");
$(window).scroll(function () {
  if ($(this).scrollTop() >= 700) {
    scrollButton.show();
  }
  else {
    scrollButton.hide();
  }
});

scrollButton.click(function () // 3shan lma kant gowa window w ndos 3la el sehm mknsh byrda ynzl b scroll tany
{
  $("html,body").animate({ scrollTop: 0 }, 600);
});



//trigger niceScroll w dh gaybeno mn 3la elnet
// $('html').niceScroll({
//   cursorcolor: '#ee7560',
//   cursorwidth:'10px',
//   cursorborder:'1px solid #ee7560',
//   cursorborderradius: '0'
// });


// var navbar = $('.navbar');
// $(window).scroll(function () {

//   if ($(window).scrollTop() > 600) {
//     navbar.css("background-color", "black");
//   }
//   else {
//     navbar.css("background-color", "rgba(0,0,0,.9)");
//   }
// });




// (function($) {
//   $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

//   $('.accordion li').click(function(j) {
//       var dropDown = $(this).closest('li').find('div');

//       $(this).closest('.accordion').find('div').not(dropDown).slideUp();

//       if ($(this).hasClass('active')) {
//           $(this).removeClass('active');
//       } else {
//           $(this).closest('.accordion').find('a.active').removeClass('active');
//           $(this).addClass('active');
//       }

//       dropDown.stop(false, true).slideToggle();

//       j.preventDefault();
//   });
// })(jQuery);


(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});



////////////////////////////////////////////////
