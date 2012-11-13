Mule.DeploymentsPagerView = Ember.View.extend({
    controller: null,
    templateName: 'deployments-pager-template',
    tagName: 'div',
    classNames: ['span12', 'bottombar', 'no-margin'],
    didInsertElement: function () {
        var that = this;
        this.$().find(".page").click(function (e) {
            var pageIndex = $(e.currentTarget).attr("data-index"),
                parent = $(e.currentTarget).parent();

            parent.find("li")
                  .removeClass("active");

            if (pageIndex === "next") {
                parent.find('li[data-index=' + that.controller.getNextPage() + ']')
                      .addClass("active");
            } else if (pageIndex === "prev") {
                parent.find('li[data-index=' + that.controller.getPrevPage() + ']')
                      .addClass("active");
            } else {
                $(e.currentTarget).addClass("active");
            }

            that.controller.changePage(pageIndex);
        });
    }
});