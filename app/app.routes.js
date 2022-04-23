angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
        reloadOnSearch: false,
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: 'not-found',
        url: '/not-found',
        template: '<v-not-found-page></v-not-found-page>',
      });
    // $urlRouterProvider.when('', '/');

    // the unknown
    $urlRouterProvider.otherwise('/not-found');
  });
