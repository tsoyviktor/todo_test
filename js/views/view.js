define(['underscore'], function (_) {
    
    var View = function () {};
    
    _.extend(View.prototype, {

        _mountPoint: '#mount_point',

        start: function (data) {
            this._render(data);
        },

        _render : function (data) {
            return _.template(this._getTemplate())({data: data});
        },

        _getTemplate : function () {
            return "<b> <%= data %> </b>";
        }

    });

    return View;
});
