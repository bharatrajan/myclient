var bookStore = {} || bookStore;
bookStore.utils = {

	pageURL : function(){
			var result = window.location.hostname;
			if(window.location.port){
				result = result+':'+window.location.port;
			}
			return result;
		}
		
};

