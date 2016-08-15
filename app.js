var myApp = angular.module('myApp', ['ngAnimate', 'angularMoment' ])

myApp.controller('myController', ['$scope', function($scope, $http){
	$scope.dif = 'hi';
	$scope.searchText;
	$scope.form = false;
	$scope.addCom = false;

	$scope.data = [
					{
					title: 'Next to Antarctica',
					clicks: 11,
					author: 'dats me',
					date: new Date('July 28, 2016 03:24:00'),
					description: 'was bad',
					url: 'http://3.bp.blogspot.com/-Ue1BNDfjTwE/UPFybkYOckI/AAAAAAAACB0/SfkwREI3KHM/s640/A-Beautiful-Path-Villaviciosa-Asturias-Spain-700x525.jpg',
					commentOn: false,
					add: false,
					comments: []
				},
				{
					title: 'Outside Aspen, Co',
					clicks: 0,
					author: 'dats me',
					date: new Date(),
					description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					url: 'http://kingofwallpapers.com/beautiful/beautiful-019.jpg',
					commentOn: false,
					add: false,
					comments: []
				},
				{
					title: 'Next Door Neighbors',
					clicks: 4,
					author: 'Not me',
					date: new Date(),
					description:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					url: 'http://webneel.com/daily/sites/default/files/images/daily/07-2015/3-beautiful-peacock-photo-by-sibiar.preview.jpg',
					commentOn: false,
					add: false,
					comments: []
				}
			];

var idNext = ($scope.data[$scope.data.length-1].id + 1);

	$scope.sort = function(sort){
		$scope.dif = sort;
	};
	$scope.ups = function(post){
		post.clicks ++;
	};
	$scope.downs = function(post){
		post.clicks --;
	};
	$scope.formDrop = function(){
		if(!$scope.form){
			$scope.form = true;
		} else {
			$scope.form = false;
		}
	};
	$scope.switchComment = function(post){
		if(!post.commentOn){
			post.add = false;
			post.commentOn = true;
		} else {
			post.commentOn = false;
		}	};

	$scope.addComment = function(post){
		if(!post.add){
			post.commentOn = false;
			post.add = true;
		} else {
			post.add = false;
		}	};

		$scope.comment = {};
		$scope.commentForReal = function(post){
			post.comments.push($scope.comment)
			$scope.comment = {};
			post.commentOn = true;
			post.add = false;
			console.log(post.comments);
		}

	$scope.submit = function(){
		$scope.data.push({
			id: idNext,
			title: $scope.user.title,
			clicks: 0,
			author: $scope.user.author,
			date: new Date(),
			description: $scope.user.description,
			url: $scope.user.url,
			comments: []
		})
		console.log($scope.data);
		$scope.user.title = '';
		$scope.user.author = '';
		$scope.user.description = '';
		$scope.user.url = '';
		$scope.myForm.title.$setPristine();
		$scope.myForm.author.$setPristine();
		$scope.myForm.description.$setPristine();
		$scope.myForm.url.$setPristine();
		$scope.form = false;
	};
}])
