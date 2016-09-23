angular.module("ngTicTacToe", []);

(function()
{
  "use strict";
  angular
    .module("ngTicTacToe")
    .controller("ctrTicTacToe", function($scope) {
      $scope.userSymbol = "";
      $scope.aiSymbol = "";
      $scope.hideWelcomeScreen = false;
      $scope.hideBoard = true;
      
      $scope.playerSymbol = function(symbol){
        switch (symbol) {
          case 'X':
            $scope.userSymbol = "X";
            $scope.aiSymbol = "O";
            break;
          case 'O':
            $scope.userSymbol = "O";
            $scope.aiSymbol = "X";
          default:

        }

        $scope.hideWelcomeScreen = true;
        $scope.hideBoard = false;

        console.log($scope.userSymbol + " and " + $scope.aiSymbol);
      }



    });

  })();
