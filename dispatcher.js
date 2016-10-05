function Dispatcher(){
	var	_q,
		p = function(actionName,data){
			if(_q[actionName] && _q[actionName].length){
				_q[actionName].every(function(action){
					action(data);
				});
			}	
		},
		s = function(actionName,fn){
			if(typeof _q[actionName] == 'undefined'){
				_q[actionName] = [fn];
			}
			else{
				_q[actionName].push(fn);
			}
		};

		return {
			publish:p,
			subscribe:s
		};
}
