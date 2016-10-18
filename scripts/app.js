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
      $scope.choosenMove = "";
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
        console.log("Before user: " + $scope.board);
        $scope.board[sqNum-1] = $scope.userSymbol;
        $scope["sq" + sqNum] = $scope.userSymbol;
        $scope["sq" + sqNum + "Disabled"] = true;
        $scope.aiPlaceSymbol();
        console.log("After user: " + $scope.board);

      }//End of user move

      $scope.aiPlaceSymbol = function (){
        console.log("Before ai: " + $scope.board);
        $scope.getAvailableMoves();
        console.log("Possible moves :" + $scope.possibleMoves)
        $scope.bIndex =  Math.floor(Math.random()* $scope.possibleMoves.length);
        $scope.choosenMove = "" + ($scope.bIndex + 1);
        if($scope["sq" + $scope.choosenMove + "Disabled"] === false){
        $scope.board[$scope.bIndex] = $scope.aiSymbol;
        $scope["sq" + $scope.choosenMove] = $scope.aiSymbol;
        $scope["sq" + $scope.choosenMove + "Disabled"] = true;
        console.log("After ai: " + $scope.board);
      }
        /*
        for(var i = 1; i < 10; i++){
          if($scope["sq" + i + "Disabled"] === false){
            console.log("AI");
            $scope.board[i-1] = $scope.aiSymbol;
            $scope["sq" + i] = $scope.aiSymbol;
            $scope["sq" + i + "Disabled"] = true;
            break;
          }

        }
        */
        $scope.choosenMove = "";
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
