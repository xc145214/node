/**
 * Created by Administrator on 2015/4/15.
 */

app.controller('NavbarController',['$scope','$http',function($scope,$http){
    $http.get("/JSON/nav.json")
        .success(function(data){
            $scope.navbar = data;
        });
}]);