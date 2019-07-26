require.config({
  //配置总路径
  baseUrl: "js/project",
  waitSeconds: 0,
  paths: {
    // 其他模块会依赖他
    'angular':						'../lib/angular/angular.min',
    'ui.route':						'../lib/angular/angular-ui-router',
    'angularAMD':					'../lib/angular/angularAMD',
    'angular-sanitize':		'../lib/angular/angular-sanitize.min',
    'ngStorage': 					'../lib/angular/ngStorage.min',
    'css': 								'../lib/require/css.min',
    'services': 					'service',
    'drct': 							'directive',
    'tplt': 							'directive/template',
  },
  map: {
    '*': {
      'css': '../lib/require/css.min'
    }
  },
  shim: {   //外部加载的css
    'style': [
      'css!../../css/main.css',
    ],
    // 表明该模块依赖angular
    'angularAMD': 				['angular'],
    'ui.route': 					['angular'],
    'angular-sanitize': 	['angular'],
    'ngStorage': 					['angular'],
  },
  //版本控制+随机数，更新后防缓存
  urlArgs: "v=1.0_" + Date.parse(new Date()),
  // 启动程序 js/scripts/app.js
  deps: ['app']
});
