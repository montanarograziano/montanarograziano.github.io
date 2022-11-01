; (function () {

	'use strict';



	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var getHeight = function () {
		var extraHeight = 0;

		if (isMobile.any()) extraHeight = 100;

		setTimeout(function () {
			$('#fh5co-main').stop().animate({
				'height': $('.fh5co-tab-content.active').height() + extraHeight
			});
		}, 200);
	};

	var getHeightFilter = function () {
		var extraHeight = 200;

		if (isMobile.any()) extraHeight = 200;

		setTimeout(function () {
			$('#fh5co-main').stop().animate({
				'height': $('.fh5co-tab-content.active').height() + extraHeight
			});
		}, 200);
	};

	var pieChart = function () {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 10,
			lineCap: 'butt',
			barColor: '#17e7a4',
			trackColor: "#000000",
			size: 160,
			animate: 1000
		});
	};

	var tabContainer = function () {
		getHeight();
		$(window).resize(function () {
			getHeight();
		})
	};

	var tabContainerFilter = function () {
		getHeightFilter();
		$(window).resize(function () {
			getHeight();
		})
	};

	var portfolioMasonry = function () {
		$('.filters ul li').click(function () {
			$('.filters ul li').removeClass('active');
			$(this).addClass('active');

			let data = $(this).attr('data-filter');
			$(".row-grid").isotope({
				itemSelector: '.element-grid',
				filter: data,
				layoutMode: 'fitRows',
				percentposition: true,
				masonry: {
					columnWidth: ".element-grid"
				}
			})
			tabContainerFilter();
		});


		/* 		if (document.getElementById("section-portfolio")) {
					var $grid = $(".row-grid").isotope({
						itemSelector: ".all",
						percentPosition: true,
						masonry: {
							columnWidth: ".all"
						}
					})
				}; */


	};

	var tabClickTrigger = function () {
		$('.fh5co-tab-menu a').on('click', function (event) {
			event.preventDefault();
			var $this = $(this),
				data = $this.data('tab'),
				pie = $this.data('pie');

			// add/remove active class
			$('.fh5co-tab-menu li').removeClass('active');
			$this.closest('li').addClass('active');

			$('.fh5co-tab-content.active').addClass('animated fadeOutDown');

			setTimeout(function () {
				$('.fh5co-tab-content.active').removeClass('active animated fadeOutDown fadeInUp');
				$('.fh5co-tab-content[data-content="' + data + '"]').addClass('animated fadeInUp active');
				if ($this.attr('data-tab') == 4) {
					getHeightFilter();
				}
				else {
					getHeight();
				}
			}, 500);

			if (pie === 'yes') {
				setTimeout(function () {
					pieChart();
				}, 800);
			}

		})
	};

	let switchMode = function () {
		$('body').toggleClass('light-mode');
	}

	$('#lastModified').text("Last update: " + new Date());

	// Document on load.
	$(function () {
		tabContainer();
		tabClickTrigger();
		portfolioMasonry();
		//switchMode();
	});


}());