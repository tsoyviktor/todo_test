'use strict'

require.config({
  paths: {
    baseUrl: 'js/',
    underscore : 'lib/underscore',
  }

});

require(['controller'], function (controller) {
    controller.start();
});
