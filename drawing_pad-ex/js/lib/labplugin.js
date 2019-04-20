var drawing_pad-ex = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'drawing_pad-ex',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'drawing_pad-ex',
          version: drawing_pad-ex.version,
          exports: drawing_pad-ex
      });
  },
  autoStart: true
};

