define(['underscore', 'views/view', 'views/item_view'], function (_, View, ItemView) {

    var ItemListView = function () {};
    
    _.extend(ItemListView.prototype, View.prototype, {

        start: function (collectinModel) {
            var items = collectinModel.getItems();
            
            var renderedItems = items.reduce(function (acc, itemModel) {
                var itemView = new ItemView();
                return itemView.render(itemModel.stringify());
            }, '');

            var viewData = {};
            
        },

        render : function (data) {
             var element = document.querySelector(this._mountPoint);
             element.innerHTML = this._getTemplate(data);
        },

        _getTemplate : function () {
            return "<ul>" +
                "<%= data %>" +
            "</ul> <p><%=items_number%> Elements<p>";
        }

    });

    return ItemListView;

});