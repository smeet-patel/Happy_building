var app = angular.module('info226prj', []);

app.controller('MainContent', function($scope, $http) {
$scope.login = true; 
$scope.Owner =true;
  // Sets initial values for all login
  $scope.username = ""; //null
  $scope.password = ""; //null
  $scope.feedback = "Welcome to Happy Building Login. Please enter user details"; //welcome
  $scope.validUsername = false; 
  $scope.validPassword = false; 
  $scope.target = 'https://happybuildings.sim.vuw.ac.nz/api/patelsmee/user_list.json'; //link to server VUW Smeet Patel
  $scope.myData = null;
  // getting the JSON file from server VUW Smeet Patel
  $scope.promise = $http.get($scope.target)
    .then(
      function sucessCall(response) {
        $scope.myData = response.data.users;
      },
      function errorCall(response) {
        $scope.feedback = "reading file Error (patelsmee file): " + response.status; //display error for not reading
        $scope.myData = null;
      });
  //clicks login button
  $scope.clickLogin = function() {
    if($scope.myData === null){
      $scope.feedback = "Error reading file (patelsmee file)";}
// how to check username and password against VUW Smeet Patel server
   for (i = 0; $scope.myData !== null && i < $scope.myData.length; i++) { //iterates the data you retrived from the server, one element at a time
      if ($scope.myData[i].LoginName == $scope.username && $scope.myData[i].Password == $scope.password) { //if that element, equals what the user has inputed
        $scope.validUsername = true; //then the username is valid
        $scope.validPassword = true; // then the password is valid
      }
      }
      if ($scope.validUsername && $scope.validPassword) { 
        $scope.feedback = "Login successful as " + $scope.validUserType; // login successful
           $scope.wrapper = true;
    $scope.navBar = true; 
    $scope.home = true; 
    $scope.directory = false; 
    $scope.building = false;
    $scope.project = false;
    $scope.inspection = false; 
    $scope.login = false;
      } else {
        $scope.feedback = "Re-enter login details";
      }
  };
  //clicks login button
  $scope.clickLogin1 = function() {
    if($scope.myData === null){
      $scope.feedback = "Error reading file (patelsmee file)";}
// how to check username and password against VUW Smeet Patel server
    for (i = 0; $scope.myData !== null && i < $scope.myData.length; i++) { //iterates the data you retrived from the server, one element at a time
      if ($scope.myData[i].LoginName == $scope.username && $scope.myData[i].Password == $scope.password) { //if that element, equals what the user has inputed
        $scope.validUsername = true; //then the username is valid
        $scope.validPassword = true; // then the password is valid
      }
      }
      if ($scope.validUsername && $scope.validPassword) { 
        $scope.feedback = "Login successful as " + $scope.validUserType; // login successful
           $scope.wrapper = true;
    $scope.navBar = true; 
    $scope.home = true; 
    $scope.directory = false; 
    $scope.building = false;
    $scope.project = false;
    $scope.inspection = false; 
    $scope.login = false;
      } else {
        $scope.feedback = "Re-enter login details";
      }
  };
  //clicks login button
  $scope.clickLogin2 = function() {
    if($scope.myData === null){
      $scope.feedback = "Error reading file (patelsmee file)";}
// how to check username and password against VUW Smeet Patel server
     for (i = 0; $scope.myData !== null && i < $scope.myData.length; i++) { //iterates the data you retrived from the server, one element at a time
      if ($scope.myData[i].LoginName == $scope.username && $scope.myData[i].Password == $scope.password) { //if that element, equals what the user has inputed
        $scope.validUsername = true; //then the username is valid
        $scope.validPassword = true; // then the password is valid
      }
      }
      if ($scope.validUsername && $scope.validPassword) { 
        $scope.feedback = "Login successful as " + $scope.validUserType; // login successful
           $scope.wrapper = true;
    $scope.navBar = true; 
    $scope.home = true; 
    $scope.directory = false; 
    $scope.building = false;
    $scope.project = false;
    $scope.inspection = false; 
    $scope.login = false;
      } else {
        $scope.feedback = "Re-enter login details";
      }
  };
  // cancel button
  $scope.clickCancel = function() {
    $scope.feedback = "Login details cancel";
    $scope.username = "";
    $scope.password = "";
  };
 $scope.homeClick = function() {
   $scope.wrapper = true;
    $scope.navBar = true; 
    $scope.home = true; 
    $scope.directory = false; 
    $scope.building = false;
    $scope.project = false;
    $scope.inspection = false; 
    $scope.login = false;
  } 
   $scope.directoryClick = function() {
     $scope.wrapper = true;
      $scope.navBar = true; 
    $scope.directory = true; 
    $scope.home = false;
    $scope.building = false;
    $scope.project = false;
    $scope.inspection = false; 
    $scope.login = false;
  } 
  
     $scope.buildingClick = function() {
      $scope.wrapper = true;
       $scope.navBar = true; 
    $scope.building = true; 
    $scope.home = false;
    $scope.directory= false;
    $scope.project = false;
    $scope.inspection = false; 
    $scope.login = false;
  } 
  
   $scope.projectClick = function() {
     $scope.wrapper = true;
      $scope.navBar = true; 
    $scope.project = true; 
    $scope.home = false;
    $scope.directory= false;
    $scope.building= false;
    $scope.inspection = false; 
    $scope.login = false;
  } 
  
  $scope.inspecClick = function() {
    $scope.wrapper = true;
       $scope.navBar = true; 
    $scope.inspection = true; 
    $scope.home = false;
    $scope.directory= false;
    $scope.building= false;
    $scope.project = false; 
    $scope.login = false;
  } 
  
    $scope.loginClick = function() {
    $scope.navBar = false; 
    $scope.wrapper = false;
    $scope.login = true; 
    $scope.home = false;
    $scope.directory= false;
    $scope.building= false;
    $scope.project = false; 
    $scope.inspection = false;
    $scope.username = ""; //null
    $scope.password = ""; //null
    $scope.feedback = "Welcome to Happy Building Login. Please enter user details"; //welcome
    $scope.validUsername = false; 
    $scope.validPassword = false;   
    } 
});
app.controller('dir', function($scope, $http) {
  $scope.directorytext = 'hastag';
  $scope.target = 'https://happybuildings.sim.vuw.ac.nz/api/patelsmee/building_dir.json';
      $http.get($scope.target)
          .then(
            function sucessCall(response) { 
              $scope.myData = response.data.buildings;
              $scope.feedback = "File read successfully.";
            },
            function errorCall() {
              $scope.feedback = "Error reading file.";
            }
          ); 
});
app.controller('buildingtype', function($scope, $http) {
   $scope.target = 'building_type.json';
      $http.get($scope.target)
          .then(
            function sucessCall(response) { 
              $scope.myData = response.data.Buildings;
              $scope.feedback = "File read successfully.";
            },
            function errorCall() {
              $scope.feedback = "Error reading file.";
            }
          ); 
});
app.controller('status', function($scope, $http) {
   $scope.target = 'status.json';
      $http.get($scope.target)
          .then(
            function sucessCall(response) { 
              $scope.myData = response.data.status1;
              $scope.feedback = "File read successfully.";
            },
            function errorCall() {
              $scope.feedback = "Error reading file.";
            }
          );
});
app.controller('info1', function($scope, $http) {
   $scope.target = 'info_type.json';
      $http.get($scope.target)
          .then(
            function sucessCall(response) { 
              $scope.myData = response.data.buildin;
              $scope.feedback = "File read successfully.";
            },
            function errorCall() {
              $scope.feedback = "Error reading file.";
            }
          ); 
});
