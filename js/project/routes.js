define([], function () {
  return {
    defaultRoute: '/index',
    routes: {
      'index': {
        templateUrl: 'components/index.html',
        url: '/index',
        dependencies: ['controller/indexController'],
        allowAnonymous: true
      }
    }
  };
});