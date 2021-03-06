var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'DrawModel',
        _view_name : 'DrawView',
        _model_module : 'drawing_pad-ex',
        _view_module : 'drawing_pad-ex',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function() {
        this.sketch = document.createElement('div');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.settings_colours = document.createElement("div");
        this.settings_brush_size = document.createElement("div");   
        this.settings_brush_size.setAttribute("class", "drawing-pad-settings"); 
        console.log("create");

        this.sketch.appendChild(this.canvas);
        this.el.appendChild(this.sketch)
        this.el.appendChild(this.settings_colours);
        this.el.appendChild(this.settings_brush_size);
        this.value_changed();
        this.model.on('change:data', this.value_changed, this);
        console.log(this.model);
    },

    value_changed: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var data = this.model.get('data');
        var x = data[0];
        var y = data[1];
        var t = data[2];
        this.ctx.beginPath();

        if (x.length<1 || y.length<1 || x.length != y.length)
        {
            // alert("erreur")
            return;
        }
        this.ctx.moveTo(x[0], this.canvas.height - y[0]);
        for (var k=1 ; k<x.length ; k++){
            if (t[k]-t[k-1]<100){
                this.ctx.lineTo(x[k], this.canvas.height-y[k]);
                this.ctx.stroke();
            }
            else{
                this.ctx.moveTo(x[k], this.canvas.height-y[k]);
            }
        }
    }
});


module.exports = {
    DrawModel : DrawModel,
    DrawView : DrawView
};
