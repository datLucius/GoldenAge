(function() {
  'use strict';
  angular
    .module('hipHop')
    .factory('SampleService', function($http){
      var urlOpts = {
        baseUrl: 'https://api.spotify.com/v1/tracks/',
        buildSampleUrl: function () {
          return this.baseUrl + 'sampleId';
        },
        buildSongUrl: function () {
          return this.baseUrl + 'songId';
        }
      };

      var getSongInfo = function (songId) {
        var songInfo = $http.get(urlOpts.buildSongUrl(songId));
        return songInfo;
      };

      var getSampleInfo = function (sampleId) {
        var sampleInfo = $http.get(urlOpts.buildSampleUrl(sampleId));
        return sampleInfo;

      }

      return {
        songInfo : songInfo,
        sampleInfo : sampleInfo
      };

    });
}());
