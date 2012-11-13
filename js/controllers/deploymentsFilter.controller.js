Mule.DeploymentsFilterController = Ember.ObjectController.extend({
    content: null,
    applyFilter: function (query) {
        this.get('content').applyFilter(query);
    },
    clearFilter: function () {
        this.get('content').clearFilter();
    }
});