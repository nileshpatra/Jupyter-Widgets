var widget_tool = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'widget_tool',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'widget_tool',
          version: widget_tool.version,
          exports: widget_tool
      });
  },
  autoStart: true
};

