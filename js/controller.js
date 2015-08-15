
define(['models/item_model', 'models/items_collection_model',
    'views/item_view', 'views/main_view'], function (ItemModel, CollectionModel, ItemView, MainView) {

    var Controller = function () {};

    _.extend(Controller.prototype, {

        start: function () {
            var items = this._getDefaultItems();
            this.collection = new CollectionModel();
            this.collection.addItems(items);
            var mainView = this._renderMainView(this.collection);

            mainView.addBusinessEventHandler(MainView.prototype.EVENTS.ADD_NEW_ITEM, this._addNewItem);
        },

        _renderMainView : function (collection) {
            var mainView = new MainView();
            mainView.start(collection || this.collection);
            return mainView;
        },

        _addNewItem : function (itemTitle) {
            var newModel = new ItemModel();
            newModel.setTitle(itemTitle);
            this.collection.addItem(newModel);
            this._renderMainView(this.collection);
        },

        _getDefaultItems : function () {
            var model1 = new ItemModel();
            model1.set('item_title', "I've got to something 111");
            model1.set('is_complete', false);

            var model2 = new ItemModel();
            model2.set('item_title', "I've got to something 22");
            model2.set('is_complete', false);

            return [model1, model2];
        }


    });

    return Controller;

});
