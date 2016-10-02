var	Mark = {
		Player:true,
		Game:false
	},
	Result = {
		playerWon:true,
		gameWon:false
		tie:null
	};

function TickyTacky(dispatcher){
	var	gameState = startGame();
	wait(gameState).then(play,shakeHands);
}

function startGame(){
	return [ [null,null,null],[null,null,null],[null,null,null]];	
}
function wait(gameState,dispatcher){
	var promise =  {
		fulfill:function(){
			play(gameState);
		},
		reject:function(){
			shakeHands(gameState);
		},
		then:function(success,failure){
			this.success = success;
			this.failure = failure;	
		}
	};
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

//Now we come to the tricky part - the play, which is where reInforced learning is supposed to happen as well as actions 
