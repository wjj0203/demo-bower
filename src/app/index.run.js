(function() {
  'use strict';

  angular
    .module('demoBower')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
