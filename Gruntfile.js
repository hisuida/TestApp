const path = require('path');

module.exports = function (grunt) {
  // autoload grunt tasks from package.json and their configurations
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'node_modules/grunt-ui-tasks/tasks/config'),
    overridePath: path.join(process.cwd(), 'tasks/config'),
    data: {
      apptitle: 'newApp',
      vendorJS: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/underscore/underscore.js',
        'bower_components/backbone/backbone.js',
        'node_modules/@kahwee/backbone-deep-model/dist/backbone-deep-model.js',
        'bower_components/backbone-validation/dist/backbone-validation.js',
        'bower_components/backbone-forkable-model/index.js',
        'bower_components/backbone.radio/build/backbone.radio.js',
        'bower_components/moment/moment.js',
        'bower_components/marionette/lib/backbone.marionette.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
        'bower_components/chosen/chosen.jquery.min.js',
        'bower_components/typeahead.js/dist/typeahead.bundle.js',
        'bower_components/handlebars/handlebars.runtime.js',
        'bower_components/datatables/media/js/jquery.dataTables.js',
        'bower_components/ui-components/scripts/vendor/vht-system-status.js',
        'bower_components/ui-components/scripts/vendor/vht-doughnut.js'
      ]
    }
  });

  // load project tasks from tasks/ folder
  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'help');
};
