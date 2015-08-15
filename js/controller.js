
define(['models/item_model', 'models/items_collection_model',
    'views/item_view', 'views/main_view'], function (ItemModel, CollectionModel, ItemView, MainView) {

    var Controller = function () {};

    _.extend(Controller.prototype, {

        start: function () {
            var items = this._getDefaultItems();
            this.collection = new CollectionModel();
            this.collection.addItems(items);

            this._renderMainView(this.collection);
            this.mainView.initializeDOMListeners();

            this.mainView.addBusinessEventHandler(MainView.prototype.EVENTS.ADD_NEW_ITEM, this._addNewItem.bind(this));
            this.mainView.addBusinessEventHandler(ItemView.prototype.EVENTS.DELETE_ITEM, this._deleteItem.bind(this));
        },

        _renderMainView : function (collection) {
            this.mainView = this.mainView || new MainView();
            this.mainView.start(collection || this.collection);
        },

        _addNewItem : function (itemTitle) {
            var newModel = new ItemModel();
            newModel.setTitle(itemTitle);
            newModel.setIsActive(false);

            this.collection.addItem(newModel);
            this._renderMainView(this.collection);
        },

        _deleteItem : function (id) {
            this.collection.deleteItemById(id);
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
