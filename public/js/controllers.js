

angular.module('candidateApp', []).controller('CreateCandidateCtrl', function($scope, Candidate){
    $scope.title = 'Create a Candidate!';
    $scope.candidates = [];
    $scope.name = '';
    $scope.email = '';

    $scope.createCandidate = function () {
        Candidate.setName($scope.name);
        Candidate.setEmail($scope.email);
        console.log(Candidate._candidate);
        Candidate.save().success(function (saved_candidate) {
            $scope.candidates.push(saved_candidate);
        });
    };
}).factory('Candidate', function($http){
    // The following object will be returned as a Candidate service
    var service = {
        _candidate: {},
        setName: function(newName) {
            service._candidate['name'] = newName;
        },
        setEmail: function(newEmail) {
            service._candidate['email'] = newEmail;
        },
        save: function() {
            return $http.post('http://localhost:3000/candidates', service._candidate);
        }
    };
    return service;
});

