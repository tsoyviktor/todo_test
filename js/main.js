'use strict'

require.config({
  paths: {
    baseUrl: 'js/',
    underscore : 'lib/underscore'
  }

});

require(['controller'], function (Controller) {
    new Controller().start();
});
