define(['underscore', 'models/model'], function (_, Model) {
    
    var ItemsCollectionModel = Model.extend({

         _logName: 'ItemsCollectionModel',
         _itemModels: {},
         _itemsNumber: 0,

        FIELDS: _.extend({
            ITEMS: 'item_models',
            ITEMS_NUMBER: 'items_count'
        } Model.prototype.FIELDS),

        getItemsNumber : function () {
            return this.get(this.FIELDS.ITEMS_NUMBER);
        },


        getItemById : function (id) {
            return _.find(this.get(this.FIELDS.ITEMS), function (item) {
                return item.getId() === id;
            }, this);
        },

        deleteItemById : function (id) {
            this.set(FIELDS.ITEMS, _.reject(this.get(this.FIELDS.ITEMS), function (item) {
                return item.getId() === id;
            }));
        },

        getItems : function () {
            return this.get(this.FIELDS.ITEMS);
        },

        addItem : function (item) {
            this.get(this.FIELDS.ITEMS).push(item);
        },

        addItems : function (items) {
            this.set(this.get(FIELDS.ITEMS).concat(items));
        }

    });

    return ItemsCollectionModel;
});
