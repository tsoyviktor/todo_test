define(['underscore', 'views/view'], function (_, View) {

    var ItemView = function () {};
    
    _.extend(ItemView.prototype, View.prototype, {

        _getTemplate : function () {
            return "<li class='<%= is_active ? 'active':'inactive' %>''>" +
                    "<%= item_title %>" + 
                    "<button title='Delete' data-id='id'>"
                " </li>";
        }

    });

    return ItemView;

});