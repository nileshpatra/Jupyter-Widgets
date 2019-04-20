var tardis_ex = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'tardis_ex',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'tardis_ex',
          version: tardis_ex.version,
          exports: tardis_ex
      });
  },
  autoStart: true
};

