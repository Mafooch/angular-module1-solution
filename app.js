(function() {
  "use strict";

  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.numberOfItems = "";
    $scope.dishes = "";
    $scope.message = "";
    $scope.checkTooMuch = function() {
      var dishArray = $scope.dishes.split(",");
      var sanitizedDishArray = sanitizeArray(dishArray);
      if(sanitizedDishArray.length > 3) {
        $scope.message = "Too much";
      } else if(sanitizedDishArray.length === 0) {
        $scope.message = "Please enter data first!";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  }
  function sanitizeArray(array) {
    var sanitizedArray = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i].trim() !== "") {
        sanitizedArray.push(array[i]);
      }
    }
    return sanitizedArray;
  }
})();
