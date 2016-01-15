console.log(typeof angular);

var mainApp = angular.module('CCapp', []);

//Service for Get Book List
mainApp.factory('getBookListService', function($http) {
   return ({
        getBooks: function() {
			 var getBooksListAjax = $http.get('http://127.0.0.1:8081/api/books');
             var getBooksListResult = getBooksListAjax.then(function(result) {
                            //resolve the promise as the data
							//result = JSON.parse(result);
                            if('NULL' != result){
								return result.data;
							}
							
             });
             //return the promise directly.
             return getBooksListResult;
        }
   });
});


//Service for Adding Book 
mainApp.factory('addBookServ', function($http) {
   return ({
        add: function(bookData) {
			 var addBookAjax = $http.post('http://127.0.0.1:8081/api/books',bookData)
							.then(function(result) {
								//resolve the promise as the data
								//result = JSON.parse(result);
								if('NULL' != result){
									return result.data;
								}
             });
             //return the promise directly.
             return addBookAjax;
        }
   });
});


//Service for Deleting Book 
mainApp.factory('delBookServ', function($http) {
   return ({
        delete: function(bookID) {
			 var addBookAjax = $http.delete('http://127.0.0.1:8081/api/books/'+bookID)
							.then(function(result) {
								//resolve the promise as the data
								//result = JSON.parse(result);
								if('NULL' != result){
									return result.data;
								}
             });
             //return the promise directly.
             return addBookAjax;
        }
   });
});

