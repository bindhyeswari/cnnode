

angular.module('candidateApp', []).controller('CreateCandidateCtrl', function($scope, $http){
    $scope.title = 'Create a Candidate!';
    $scope.candidates = [];
    $scope.name = '';
    $scope.email = '';

    $scope.createCandidate = function () {
        var obj = {
            name: $scope.name,
            email: $scope.email
        };
        $http.post('candidates', obj).success(function (created_candidate) {
            $scope.candidates.push(created_candidate);
            // $scope.currentCandidate = {};
        });
    };
});

