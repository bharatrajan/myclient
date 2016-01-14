//Controller
mainApp.controller('table_controller', function($scope, $http, getBookListService, addBookServ) {
		
	//Using getBookListService 
	getBookListService.getBooks().then(function(responsBooks){
			$scope.books = responsBooks;
			//console.log($scope.books);
	});
	
	//Adding Book
	$scope.submit = function($http){
			
			//create new Book
			var book = {"title":"" , "description":"" , "authors": [ ]};
			book.title = $scope.addBook.title;
			book.description = $scope.addBook.description;
			book.authors = $scope.addBook.authorsList.split(",");
			
			//Calling service
			addBookServ.add(book).then(function(data){
					//SUCCESS : Updated Table displays Creating new book	
					if('success' == data.response.message && 'null' != data.item[0].id)
						getBookListService.getBooks().then(function(responsBooks){
							$scope.books = responsBooks;
					});
				});
		
	}
	
	//Delete book
	$scope.delete = function(){
		//Delete AJAX call goes here
		//ng-value='UUId' carries UUID for AJAX call
	};
});

	
	
		
			