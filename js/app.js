'use strict';

angular.module('myApp', [])
  .controller('StatController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();

       console.log($scope.details);
    });

    $scope.search = "NY Mets";

    function fetch(){
    /*  $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      .then(function(response){ $scope.details = response.data; });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)http://api.sportradar.us/mlb-t6/players/6e1cac5c-b059-4b80-a267-5143b19efb27/profile.json?api_key=rsg2ehj4293rcr9x794dv7zr
      .then(function(response){ $scope.related = response.data; });
      */
      $http.get("http://api.sportradar.us/mlb-t6/players/6e1cac5c-b059-4b80-a267-5143b19efb27/profile.json?api_key=rsg2ehj4293rcr9x794dv7zr")
       .then(function(response){ $scope.details = response.data; });

    }

//    $scope.update = function(movie){
  //    $scope.search = movie.Title;
  //  };

    $scope.select = function(){
   //   this.setSelectionRange(0, this.value.length);
    }
  });
