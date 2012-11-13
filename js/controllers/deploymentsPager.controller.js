Mule.DeploymentsPagerController = Ember.ObjectController.extend({
    content: null,
    changePage: function (page) {
        this.get('content').getPaged(page);
    },
    getNextPage: function () {
        return this.get('content').getNextPage();
    },
    getPrevPage: function () {
        return this.get('content').getPrevPage();
    }
});