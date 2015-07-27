(function() {
  'use strict';
  angular
    .controller ('MainController', function ($scope, SampleService){

      $scope.getIdsFromClick = function() {
        var sampleId = this.spotifySampleId;
        var songId = this.spotifySongId;
        SampleService.getSongInfo(songId).then(SampleService.getSampleInfo(sampleId)).then($scope.assignInfoForDetail());
      },

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

    });
}());
