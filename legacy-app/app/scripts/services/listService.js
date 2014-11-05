'use strict';

angular.module('100App').factory('listService', function listService($q, $firebase){
var deferred = $q.defer();
var FBURL = "https://top100.firebaseio.com/";

return {
    getList: function () {
        var ref = new Firebase(FBURL + 'uvef');
        return $firebase(ref);

    },
    getListName: function(){ //needs to be matching what's in getList
        return 'uvef';
    },
    getUsers: function () {
        var ref = new Firebase(FBURL + 'users');
        return $firebase(ref);
    },

    loginPrompt: function(){
      console.log('you clicked login');
        $('body').toggleClass('modal-open-up');
    },
};
return deferred.promise;
});





