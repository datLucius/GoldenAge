(function() {
  'use strict';
  angular
    .module('hipHop')
    .controller('MainController', function ($scope, SampleService){

      $scope.hilightFunction = function() {
        // this.removeClass('hideBasicWindow');
        $(this).addClass('colorNode');
      },

      $scope.deHilightFunction = function() {
        this.addClass('hideBasicWindow');
        this.removeClass('colorNode');
      },

      $scope.assignIdsFromClick = function() {
        var sampleId = this.spotifySampleId;
        var songId = this.spotifySongId;
        console.log('assign ids from click running sampledId:', sampleId);
        $scope.sendSongIdtoAPI(songId);
        $scope.sendSampleIdToAPI(sampleId);
      },
      

      $scope.sendSongIdtoAPI = function(songId) {
        console.log('get info songs running');
        SampleService.sendSongIdtoBuilder(songId);
      };

      $scope.sendSampleIdToAPI = function(sampleId) {
        console.log('get sample info running sampleId:', sampleId);
        SampleService.sendSampleIdtoBuilder(sampleId);
      };


      $scope.assignInfoForDetail = function(songInfo, sampleInfo) {
        var sampleData = {
          "title" : sampleInfo.name,
          "artist" : sampleInfo.artists.name,
          "album" : sampleInfo.album.name,
          "image" : sampleInfo.images[0].url,
          "spotifyId" : sampleInfo.id
        };
        var songData = {
          "title" : songInfo.name,
          "artist" : songInfo.artists.name,
          "album" : songInfo.album.name,
          "image" : songInfo.images[0].url,
          "spotifyId" : sampleInfo.id
        };
      }

    })
    .directive('hilight', function(){
      return{
        restrict: 'E',
        scope: true,
        controller: function($scope, $element) {
          console.log("hilight running");
          $scope.onMouseenter = function () {
              // $element.removeClass(hideBasicWindow);
              $element.addClass(colorNode);
            }
          $scope.onMouseleave = function () {
              $element.removeClass(colorNode);
              // $element.addClass(hideBasicWindow);
            }
          }
        }
      });

})();
