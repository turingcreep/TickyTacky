//dispatcher
//constants
//promise
//think
function TickyTacky(dispatcher,state){
	var	gameState = state|startGame();
	wait(gameState,dispatcher).then(think,shakeHands);
}

function startGame(){
	return [ [null,null,null],[null,null,null],[null,null,null]];	
}
function wait(gameState,dispatcher){
	var promise =  new TTPromise(gameState);
	dispatcher.subscribe('playerMoved',function(){
		promise.fulfill();
	});	
	return promise;
}
function shakeHands(gameState){
	var	result = [
		checkRow(gameState),
		checkColumn(gameState),
		checkDiagonal(gameState)
	],
		resultElem;
	if(resultElem = result.pop() != null){
		return resultElem;
	}
	else{

	}	return Result.tie;
}
function checkRow(gameState){
	for(var i=0;i<3;i++){
		if(gameState[i][0]!=null){
			if(gameState[i][0] === gameState[i][1] === gameState[i][2]){

				if(gameState[i][0] === Mark.player){
					return Result.playerWon; 
				}
				else{
					return Result.gameWon;
				}
			}
		}
	}
}
function checkColumn(gameState){
	for(var i=0;i<3;i++){
		if(gameState[0][i]!=null){
			if(gameState[0][i] === gameState[0][i] === gameState[0][i]){

				if(gameState[0][i] === Mark.player){
					return Result.playerWon; 
				}
				else{
					return Result.gameWon;
				}
			}
		}
	}
}
function checkDiagonal(gameState){
	if(gameState[0][0] === gameState[1][1] === gameState[2][2]){
		if(gameState[0][0] === Mark.player){
			return Result.playerWon;	
		}
		else{
			return Result.gameWon;
		}

	}
	else if(gameState[2][0] === gameState[1][1] === gameState[0][2]){
		if(gameState[0][0] === Mark.player){
			return Result.playerWon;	
		}
		else{
			return Result.gameWon;
		}
	}
}
