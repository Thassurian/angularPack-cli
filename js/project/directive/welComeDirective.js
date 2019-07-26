//指令模块
define(['app', 'text!tplt/wel-come.html'], function(app, tpl) {
	'use strict';
	app.directive('welCome',function($timeout,$filter) {
			return {
				restrict: "EA",
				replace: false,
				scope: {
					myword: '='
				},
				template: tpl,
				controller: function($scope){
				},
				link: function(scope, element, attrs) {
					console.log(scope.myword)
				}
			}
		});
});