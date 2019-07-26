//接口服务模块
define(['app'], function(app) {
	'use strict';
	app.service('api', function($rootScope, $state, $http, $q,$location) {
		var have_err;
		function showErr(msg,errDeal){
			if(have_err) clearTimeout(have_err);
			have_err = setTimeout(function(){
				var err_msg = msg.errMsg|| msg.errorDesp || msg.errorMsg||'请求失败';
				if(msg.errorCode == 205) $state.go('login');
			},50)
		}
		this.api = function(obj,errDeal) {   //errDeal是否在这里处理，默认为是
			//统一接口调用
			var method = obj.method ? obj.method : 'GET';
			var uri = obj.uri ? obj.uri : '';
			var data = obj.data ? obj.data : {};
			var async = obj.async!=undefined ? obj.async : true;
			url += '/' + obj.mod + "?" + uri;
			
			var defer = $q.defer(); //声明延后执行
			var notDeal = !!obj.notDeal; //不在这里处理错误
			
			if(method == 'POST') {
				$.ajax({
					type: "POST",
					url: url,
					data: data,
					dataType: 'json',
    				xhrFields: {withCredentials: true},
					success: function(msg) {
						if(msg.errorCode && msg.errorCode!=0 && !notDeal) showErr(msg,errDeal);
						defer.resolve(msg); //声明执行成功
					},
					error: function(err, textStatus, errorThrown) {
						defer.resolve(err);
						if(!notDeal) deal_err(err, textStatus, errorThrown);
					}

				});
			} else if(method == 'JPOST'){
				$.ajax({
					type: "POST",
					url: url,
					data: data,
					dataType: 'json',
					contentType: 'application/json',
    				xhrFields: {withCredentials: true},
					success: function(msg) {
						if(msg.errorCode && msg.errorCode!=0 && !notDeal) showErr(msg);
						defer.resolve(msg); //声明执行成功
					},
					error: function(err, textStatus, errorThrown) {
						defer.resolve(err);
						if(!notDeal) deal_err(err, textStatus, errorThrown);
					}
				});
			} else {
				$.getJSON(url, data, function(msg) {
//					console.log(msg)
					if(msg.err_code == 0) {
						defer.resolve(msg); //声明执行成功
					} else {
						defer.resolve(msg);
					}
				});
			}
			return defer.promise; //返回承诺，返回获取数据的API
		}
		
		this.url = function(mod,_url) {
			//返回一个链接
			var url = '/' + mod;
			if(_url) url += "?" + _url;
			return url;
		}

		this.get = function(data) {
			return this.api({
				uri: data.uri,
				method: "GET",
				data: data.data,
				mod: data.mod
			});
		}

		this.post = function(data,errDeal) {
//			return this.api($.extend({
//				method: "POST"
//			}, data),errDeal);
			return this.api({
				uri: data.uri,
				method: "POST",
				mod: data.mod,
				data: data.data
			},errDeal);
		}
		
		this.jpost = function(data) {
//			return this.api($.extend({
//				method: "JPOST"
//			}, data));
			return this.api({
				uri: data.uri,
				method: "JPOST",
				mod: data.mod,
				data: data.data
			});
		}
		function deal_err(err, textStatus, errorThrown) {
			if(err.errorCode == 205) {
				$state.go('login');
			}
		}
	});
});