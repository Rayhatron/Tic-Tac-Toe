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
      $scope.winner = "";

      //Assign symbols for player and ai on first screen
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

      }

      //Place symbol function
      $scope.placeSymbol = function(index){


        if($scope.currentPlayer == $scope.userSymbol){
          //Code for when it's user's turn
          if($scope.board[index] == ""){
            //Check if clicked box is empty in board array
            $scope.board[index] = $scope.userSymbol;  //Assign user symbol to board box since it's empty
            $scope.currentPlayer = $scope.aiSymbol //change current player so that when the function it's called again, it switches to ai move
            $scope.checkWinner($scope.userSymbol); // Check for a winner before letting ai play
            $scope.placeSymbol(); // call function again for ai turn
           
          } 
        }else{
          $scope.aiMove();
        }


        
        
      }

      $scope.aiMove = function(){

        for (var i = 0; i <= $scope.board.length; i++) {
          //loop through board
          if($scope.board[i] === ""){
            //check if current index in board is empty
            $scope.possibleMoves.push(i); // push that index to possible moves array for ai since it's empty
          }
        }
        $scope.randomNumber = Math.floor(Math.random()*$scope.possibleMoves.length); // randmonly select an index in the possible moves array
        $scope.board[$scope.possibleMoves[$scope.randomNumber]] = $scope.aiSymbol; // take the value of random index and use it to select value from it and assign ai symbol to board
        $scope.currentPlayer = $scope.userSymbol;
        $scope.possibleMoves = []; // reset possible moves array for next iteration
        $scope.checkWinner($scope.aiSymbol);
      
      }

      $scope.checkWinner = function(player){
        //check if any of the winning combination is equal to player symbol and declare that player as winner. 
        if($scope.board[1] === player && $scope.board[4] === player && $scope.board[7] === player ){
          $scope.winner = player;
        } 
        else if($scope.board[2] === player && $scope.board[4] === player && $scope.board[6] === player ){
          $scope.winner = player;
        }
        else if($scope.board[0] === player && $scope.board[4] === player && $scope.board[8] === player ){
          $scope.winner = player;
        }
        else if($scope.board[2] === player && $scope.board[5] === player && $scope.board[8] === player ){
          $scope.winner = player;
        }
        else if($scope.board[0] === player && $scope.board[3] === player && $scope.board[6] === player ){
          $scope.winner = player;
        }
        else if($scope.board[0] === player && $scope.board[1] === player && $scope.board[2] === player ){
          $scope.winner = player;
        }
        else if($scope.board[3] === player && $scope.board[4] === player && $scope.board[5] === player ){
          $scope.winner = player;
        }
        else if ($scope.board[6] === player && $scope.board[7] === player && $scope.board[8] === player ){
          $scope.winner = player;
        }


        $scope.boardIsFull = $scope.board.every(function(i) { return i !== ""; });
      
        if($scope.winner == $scope.userSymbol){
          $scope.endGame("You won!");
        }else if($scope.winner == $scope.aiSymbol){
          $scope.endGame("Ai won!");
        }else if($scope.winner == "" && $scope.boardIsFull == true){
          $scope.endGame("Draw!");
        }
        

      }

      $scope.endGame = function (message){
            alert( message );
            $scope.board = ["", "", "", "", "", "", "", "", ""];
            $scope.userSymbol = "";
            $scope.aiSymbol = "";
            $scope.hideWelcomeScreen = false;
            $scope.hideBoard = true;
            $scope.currentPlayer = "";
            $scope.possibleMoves = [];
            $scope.choosenMove = "";
            $scope.winner = "";
      }


      
     

    });

  })();
