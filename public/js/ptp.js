(function() {
    
    var ptp = angular.module('ptp', ['ngResource']);
    
    ptp.controller("MainController",function($scope,Person) {
        $scope.$on('fbdata',function(event,args) {
            console.log(args);
            //Person.save(args, function(data) {
            //    console.log(data);
            //});
            var person = Person.findByFb({fb_id:args.id},function(data) {
                console.log(person);
                person.lastName = args.last_name;
                person.$save();
            });
            
        });
    });
    
    
    ptp.factory('Person',function($resource) {
        return $resource('person/fb:fb_id',{fb_id:'@fb_id'}, {
            save: { method: 'PUT', params: {}},
            findByFb: {method: 'GET', params: {}, isArray:false}
        });
    });
})();