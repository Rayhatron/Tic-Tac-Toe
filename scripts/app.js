angular.module("ngTicTacToe", []);

(function()
{
  "use strict";
  angular
    .module("ngTicTacToe")
    .controller("ctrTicTacToe", function($scope) {
      $scope.board = ["", "", "", "", "", "", "", "", ""];
      $scope.userSymbol = "";
      $scope.aiSymbol = "";
      $scope.hideWelcomeScreen = false;
      $scope.hideBoard = true;
      $scope.currentPlayer = "";
      $scope.possibleMoves = [];
      $scope.sq1Disabled = false;
      $scope.sq2Disabled = false;
      $scope.sq3Disabled = false;
      $scope.sq4Disabled = false;
      $scope.sq5Disabled = false;
      $scope.sq6Disabled = false;
      $scope.sq7Disabled = false;
      $scope.sq8Disabled = false;
      $scope.sq9Disabled = false;


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
        $scope.currentPlayer = $scope.userSymbol;

        console.log($scope.userSymbol + " and " + $scope.aiSymbol);
      }

      $scope.placeSymbol = function (sqNum){
        $scope.board[sqNum-1] = $scope.userSymbol;
        $scope["sq" + sqNum] = $scope.userSymbol;
        $scope["sq" + sqNum + "Disabled"] = true;
        $scope.aiPlaceSymbol();
        console.log($scope.board);

      }//End of user move

      $scope.aiPlaceSymbol = function (){
        $scope.getAvailableMoves();
        console.log($scope.possibleMoves)
        for(var i = 1; i < 10; i++){
          if($scope["sq" + i + "Disabled"] === false){
            console.log("AI");
            $scope.board[i-1] = $scope.aiSymbol;
            $scope["sq" + i] = $scope.aiSymbol;
            $scope["sq" + i + "Disabled"] = true;
            break;
          }

        }
        $scope.possibleMoves = [];
      }//End of AI move

      $scope.getAvailableMoves = function(){
        for(var i = 0; i <= 9; i++){
          if($scope.board[i] == ""){
            $scope.possibleMoves.push(i);
          }
        }
      }//End of getAvailableMoves

    });

  })();
