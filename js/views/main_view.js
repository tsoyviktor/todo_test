define(['underscore', 'views/view', 'views/item_view'], function (_, View, ItemView) {

    var ItemListView = function () {};
    
    _.extend(ItemListView.prototype, View.prototype, {

        EVENTS : {
            ADD_NEW_ITEM: 'add_new_item'
        },

        start: function (collectionModel) {
            var items = collectionModel.getItems();
            
            var renderedItems = items.reduce(function (acc, itemModel) {
                var itemView = new ItemView();
                return acc + itemView.render(itemModel.stringify());
            }, '');

            var renderingData = {};
            renderingData.data = renderedItems;
            renderingData.items_number = collectionModel.getItemsNumber();
            View.prototype.start.call(this, renderingData);
        },

        _addDOMEventsListeners : function () {
            this._addEventListener('click', this.EVENTS.ADD_NEW_ITEM, 'add');
        },

        _getElementData : function (eventTarget){
            return document.querySelector('#new_item').innerHTML;
        },

        render : function (data) {
             var element = document.querySelector(this._mountPoint);
             element.innerHTML = View.prototype.render.call(this, data);
        },

        _getTemplate : function () {
            return "<input type='text' id='new_item'> <button id='add' type='button'> Add </button>" +
            "<ul>" +
                "<%= data %>" +
            "</ul> <p>Elements number: <%=items_number%><p>";
        }

    });

    return ItemListView;

});
