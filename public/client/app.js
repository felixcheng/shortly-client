var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider

    .when('/', {
      controller: 'linksController',
      templateUrl: 'Template/links.html'
    })

    .when('/index', {
      template:'<h2>Index</h2>'
      // templateUrl: 'template/index.html'
    })

    .otherwise ({
      controller: 'redirectController',
      redirectTo: '/:id'
      // templateUrl: 'template/index.html'
    })

    $locationProvider.html5Mode(true);
});

// app.run(function($rootScope){
//   $rootScope.name = "Felix"
// });

app.controller('MyController', function($scope) {
   $scope.name = "Felix";
  });

app.controller('linksController', function($scope, $http){
  // $scope.loadLink = function(){
  $http({
    method:'GET',
    url:'/links'
  }).then (function(obj){
    // console.log(obj);
    $scope.links = obj.data;
    "<li>ohoh</li>";
  })
;});

app.controller('redirectController', function($scope, $routeParams, $http){
  console.log('redr')
  $scope.loadLink = function(){
  $http({
    method:'GET',
    url:'/' + $routeParams.id
  // }).then (function(obj){
  //   // console.log(obj);
  //   $scope.links = obj.data;
  //   "<li>ohoh</li>";
  });
}});

app.controller("submitController", function($scope, $http){

  $scope.createLink = function (){
  $http({
    method: 'POST',
    url: '/',
    data : {url:$scope.text}
  })}
});

//   var timer = setInterval(function() {
//     $scope.$apply(updateClock);
//   }, 1000);
//   updateClock();
// });

  // <script scr="http://code.angularjs.org/1.2.12/angular-route.js"></script>

