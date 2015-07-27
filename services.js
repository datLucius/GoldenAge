(function() {
  'use strict';
  angular
    .module('hipHop')
    .factory('SampleService', function($http){
      var urlOpts = {
        baseUrl: 'https://api.spotify.com/v1/tracks/',
        buildSampleUrl: function (sampleId) {
          return this.baseUrl + sampleId;
        },
        buildSongUrl: function (songId) {
          return this.baseUrl + songId;
        }
      };
      var songInfo = [];
      var sampleInfo = [];
      var sendSongIdtoBuilder = function (songId) {
        console.log('getSongInfo running, songId:', songId);
        var builtSongUrl = urlOpts.buildSongUrl(songId);
        console.log(builtSongUrl);
        requestInfoBySongUrl(builtSongUrl);
      };

      var sendSampleIdtoBuilder = function (sampleId) {
        console.log('getSampleInfo running, sampleId:', sampleId);
        console.log(typeof sampleId);
        var builtSampleUrl = urlOpts.buildSampleUrl(sampleId);
        console.log(builtSampleUrl);
        requestInfoBySampleUrl(builtSampleUrl);
      };

      var requestInfoBySampleUrl = function (builtSampleUrl) {
        var requestedSampleInfo = $http.get(builtSampleUrl).then(assignThisSample);
      };

      var requestInfoBySongUrl = function (builtSongUrl) {
        var requestedSongInfo = $http.get(builtSongUrl).then(assignThisSong);
      };

      var assignThisSample = function (requestedSampleInfo){
        sampleInfo = requestedSampleInfo;
        console.log('this is the sample:',sampleInfo);
      };

      var assignThisSong = function (requestedSongInfo){
        songInfo = requestedSongInfo;
        console.log('this is the song:',songInfo);
      };

      return {
        sendSongIdtoBuilder : sendSongIdtoBuilder,
        sendSampleIdtoBuilder : sendSampleIdtoBuilder
      };

    });
}());
