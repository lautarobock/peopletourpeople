(function() {
    
    var ptp = angular.module('ptp', ['ngResource']);
    
    ptp.controller("MainController",function($scope,Person) {
        $scope.$on('fbdata',function(event,args) {
            $scope.me = Person.findByFb({fb_id:args.id});
        });
    });
    
    
    ptp.factory('Person',function($resource) {
        return $resource('person/fb:fb_id',{fb_id:'@fb_id'}, {
            save: { method: 'PUT', params: {}},
            findByFb: {method: 'GET', params: {}, isArray:false}
        });
    });
})();