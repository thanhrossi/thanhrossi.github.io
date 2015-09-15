/*******************************************************************************
	Title: Dashboard
	Author: Thanh Tran
	Date: September 2015	
*******************************************************************************/

(function($) {

	var App = {

		/**
		 * Init Function
		 */
		init: function() {
			App.toggleMenu();
			App.initChartist();
		},
		
		/**
		 * Toogle menu
		 */
		toggleMenu: function () {
			$('.mobile-nav').click(function(){
				$(this).toggleClass('active');
				$('.left-nav').toggleClass('show');
			});
		},
		 /**
		 * Active player chart
		 */
		initChartist: function() {
			new Chartist.Line('.active-player-chart', {
			  labels: [1, 2, 3, 4, 5, 6, 7, 8],
			  series: [
			    [5, 9, 7, 8, 5, 3, 5, 60]
			  ]
			}, {
			  low: 0,
			  showArea: true
			});


			new Chartist.Line('.active-tournament-chart', {
			  labels: [1, 2, 3, 4, 5, 6, 7, 8],
			  series: [
			    [5, 9, 7, 8, 5, 3, 5, 4]
			  ]
			}, {
			  low: 0,
			  showArea: true
			});


			var chart = new Chartist.Pie('.new-player-chart', {
			  series: [20, 50],
			  labels: [1, 2]
			}, {
			  donut: true,
			  showLabel: false
			});

			var chart = new Chartist.Pie('.revisited-chart', {
			  series: [10, 20, 50],
			  labels: [1, 2, 3]
			}, {
			  donut: true,
			  showLabel: false
			});


			var chart = new Chartist.Pie('.commented-chart', {
			  series: [10, 20, 50],
			  labels: [1, 2, 3]
			}, {
			  donut: true,
			  showLabel: false
			});


			var chart = new Chartist.Pie('.actived-player-chart', {
			  series: [10, 20, 50],
			  labels: [1, 2, 3]
			}, {
			  donut: true,
			  showLabel: false
			});
		},


		
	}
	
	$(function() {
		App.init();
	});


})(jQuery);