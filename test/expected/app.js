angular.module('App.directives', []);
angular.module('App.controllers', []);
angular.module('App.controllers').controller('FirstController', function ($scope) {
});
angular.module('App', [
    'App.controllers',
    'App.directives'
]);