angular.module('App.controllers', []);
angular.module('App.controllers').controller('AppFirstCtrl', function () {
});
angular.module('App.controllers').controller('AppSecondCtrl', function () {
});
angular.module('App.directives', ['/app/controllers']);
angular.module('App.directives').directive('myDirective', function () {
    return {
        template: '/app/templates/template.html',
        styles: '/app/styles/styles.css'
    };
});
angular.module('App.directives').directive('myDirective', function () {
    return {
        template: '/app/templates/template.html',
        styles: '/app/styles/styles.css'
    };
}).directive('myDirective', [
    '$scope',
    function ($scope) {
        return {
            template: '/app/templates/template.html',
            styles: '/app/styles/styles.css'
        };
    }
]);
angular.module('App.directivesWithControllers', ['/app/controllers']).directive('AppDirectiveWithControllers', function () {
    return {};
});
angular.module('App.directivesWithLib', ['!/app/lib/somelib.js']).directive('AppDirectiveWithLib', function () {
    return {};
});
angular.module('App.directivesWithStyles', []).directive('AppDirectiveWithStyles', function () {
    return { styles: '/app/styles/directives/styles.css' };
});
angular.module('App.directivesWithTemplate', []).directive('AppDirectiveWithTemplate', function () {
    return { template: '/app/templates/directives/template.html' };
});
angular.module('App.directivesWithTemplateAndStyles', []).directive('AppDirectiveWithTemplateAndStyles', function () {
    return {
        template: '/app/templates/directives/template.html',
        styles: '/app/styles/directives/styles.css'
    };
});
angular.module('App', [
    'App.controllers',
    'App.directivesWithTemplateAndStyles',
    'App.directivesWithTemplate',
    'App.directivesWithStyles',
    'App.directivesWithLib',
    'App.directivesWithControllers',
    'App.directives'
]);