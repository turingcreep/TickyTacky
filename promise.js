function TTPromise(state){
	var	_f = function(){
			this.success(state);
		},
		_r = function(){
			this.failure(state);
		},
		_t = function(success,failure){
			this.success = success;
			this.failure = failure;	
		};

	this.success = new Function;
	this.failure = new Function;

	return {
		fulfill:_f,
		reject:_r,
		then:_t
	};
}
