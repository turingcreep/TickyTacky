//game mechanics

//for now all these are untested. We'll test this once the roadmap has been laid
var	_actions={};
function gridToBits(matrix){
	var	state=0,cell;
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			cell = matrix[i][j];
			if(cell === true){
				state= (state<<2)|2;
			}	
			else if(cell === false){
				state = (state<<2)|1;
			}
			else{
				state = (state<<2);
			}
		}
	}	
	return state;
}

function canDo(oldState){
	var 	state = oldState,
		cell,
		opsSet = 0,
		index=0;
	while(state){
		cell=state&3;
		opsSet = Math.pow(2,index)*(cell?0:1)+opsSet;	
		state = state >> 2;
		index++;
	}	
	return opsSet;
}

function xFormGame(state,op){
	var	bit,stateBits,newState=0;
	while(op){
		bit = op & 1;
		stateBits = state & 3;
		op = op >>1;
		state = state >>2;
		if(bit){
			newState = (newState<<2)|1;
		}
		else{
			newState = (newState<<2)|stateBits;
		}
	}
}
