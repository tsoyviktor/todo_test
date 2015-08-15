define(['underscore', 'views/view'], function (_, View) {

    var ItemView = function () {
    };

    _.extend(ItemView.prototype, View.prototype, {

        _getTemplate: function () {
            return "<li class='<%= is_complete ? \'active\':\'inactive\' %>'>" +
                "<p><%= item_title %>" +
                    "<button type='button' data-id='<%= id%>'> Delete </button>" +
                "</p>" +
            " </li>";
        }

    });

    return ItemView;

});