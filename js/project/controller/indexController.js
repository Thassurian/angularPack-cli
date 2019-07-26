define(['app','style','services/apiService', 'drct/welComeDirective'],function (app) {
  app.controller("indexController",function ($rootScope,$scope,$state,$http,api,$localStorage) {
  	$scope.welcome = '你好！';
  	$scope.myword = '当前是主页传来的值！'
  });
});