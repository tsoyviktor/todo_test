
define(['models/item_model', 'models/items_collection_model',
    'views/item_views', 'views/main_view'], function (ItemModel, CollectionModel, ItemView, MainView) {

    var Controller = function () {};

    _.extend(Controller.prototype, {

        start: function () {
            var items = this._getDefaultItems();
            var collection = new CollectionModel();
            collection.addItems(items);

            var mainView = new MainView();
            mainView.start(collection.stringify());
        },

        _getDefaultItems : function () {
            var model1 = new ItemModel();
            model1.set('title', "I've got to something 111");
            model1.set('is_complete', false);

            var model2 = new ItemModel();
            model2.set('title', "I've got to something 22");
            model2.set('is_complete', false);

            return [model1, model2];
        }


    });

    return Controller;

});
