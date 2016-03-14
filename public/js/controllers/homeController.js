/**
 * Created by kerwin on 16/2/23.
 */
var homeModule = angular.module('homeModule',['commonServiceModule','jobServiceModule']);
var homeController = homeModule.controller('homeController',['$scope','$http','commonService','jobService',
    function($scope, $http, commonService, jobService){
        $scope.currentMenuName = '博客';
        $scope.currentJobName = '朗新科技股份有限公司';

        jobService.findAllJobs().success(function(data){
            $scope.jobs = data;
        });
        commonService.findAllMenus().success(function(data){
            $scope.menuItems = data;
            $scope.activeMenu = 'active';
        });

        $scope.menuClick = function(menuName){
            $scope.currentMenuName = menuName;
        };
        $scope.chooseJob = function(jobName){
            $scope.currentJobName = jobName;
        };

        $scope.blogs = [];
        var blog1 = {
            imgSrc: '../../img/blog1.jpg',
            tag: '生活',
            date: '2016-03-12',
            title: '最宝贵的不是时间。而是在那些有限的时间里，给我们永恒的美好回忆的人',
            content: '多么宝贵的日子，而我们却不约而同的忘了时间。有太多不愿意回忆起的往事，就在我们逃避的年华里消失殆尽'
        };
        var blog2 = {
            imgSrc: '../../img/blog2.jpg',
            tag: '生活',
            date: '2016-03-12',
            title: '最宝贵的不是时间。而是在那些有限的时间里，给我们永恒的美好回忆的人',
            content: '多么宝贵的日子，而我们却不约而同的忘了时间。有太多不愿意回忆起的往事，就在我们逃避的年华里消失殆尽'
        };
        var blog3 = {
            imgSrc: '../../img/blog3.jpg',
            tag: '生活',
            date: '2016-03-12',
            title: '最宝贵的不是时间。而是在那些有限的时间里，给我们永恒的美好回忆的人',
            content: '多么宝贵的日子，而我们却不约而同的忘了时间。有太多不愿意回忆起的往事，就在我们逃避的年华里消失殆尽'
        };
        var blog4 = {
            imgSrc: '../../img/blog4.jpg',
            tag: '生活',
            date: '2016-03-12',
            title: '最宝贵的不是时间。而是在那些有限的时间里，给我们永恒的美好回忆的人',
            content: '多么宝贵的日子，而我们却不约而同的忘了时间。有太多不愿意回忆起的往事，就在我们逃避的年华里消失殆尽'
        };
        var blog5 = {
            imgSrc: '../../img/blog5.jpg',
            tag: '生活',
            date: '2016-03-12',
            title: '最宝贵的不是时间。而是在那些有限的时间里，给我们永恒的美好回忆的人',
            content: '多么宝贵的日子，而我们却不约而同的忘了时间。有太多不愿意回忆起的往事，就在我们逃避的年华里消失殆尽'
        };
        $scope.blogs.push(blog1);
        $scope.blogs.push(blog2);
        $scope.blogs.push(blog3);
        $scope.blogs.push(blog4);
        $scope.blogs.push(blog5);

    }
]);

homeModule.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function () {
                return {
                    'left': (newValue.h - 100) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})
