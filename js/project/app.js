define(['routes','loader','angularAMD','angular-sanitize','ui.route', 'ngStorage'], function(config, loader, angularAMD) {
	var app = angular.module("webapp", ['ngSanitize','ui.router', 'ngStorage']);
	
	app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
		function($provide, $compileProvider, $controllerProvider, $filterProvider) {
			app.controller = $controllerProvider.register;
			app.directive = $compileProvider.directive;
			app.filter = $filterProvider.register;
			app.factory = $provide.factory;
			app.service = $provide.service;
			app.constant = $provide.constant;
		}
	]);
	
	app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
		// 配置路由
		if (config.routes != undefined) {
			angular.forEach(config.routes, function(route, path) {
				$stateProvider.state(path, {
					templateUrl : route.templateUrl+'?v=1.0' + Date.parse(new Date()),
					url : route.url,
					resolve : loader(route.dependencies),
					params: route.params
				// allowAnonymous: route.allowAnonymous
				});
			});
    	}
		// 默认路由
		if (config.defaultRoute != undefined) {
			$urlRouterProvider.when("", config.defaultRoute);
			$urlRouterProvider.otherwise(config.defaultRoute);
		}
		$httpProvider.defaults.withCredentials = true;
	});
	return angularAMD.bootstrap(app);
});
