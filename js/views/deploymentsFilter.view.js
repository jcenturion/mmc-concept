Mule.DeploymentsFilterView = Ember.View.extend({
    controller: null,
    templateName: 'deployments-filter-template',
    tagName: 'div',
    classNames: ['navbar-inner'],
    didInsertElement: function () {
        var that = this;

        this.$().find("a").on('click', function (e) { that.applyFilter(e); });
    },
    applyFilter: function (e) {
        var current = $(e.currentTarget),
            dataValue = current.attr('data-value');

        current.parent().parent().find("li").removeClass("active");
        current.parent().addClass("active");

        if (dataValue === "all") {
            this.controller.clearFilter();
        } else {
            this.controller.applyFilter({
                value: dataValue,
                type: current.attr("data-filter-type")
            });
        }

        $("#faceted-search").find(":checkbox").removeAttr("checked");

        if (this.controller.content.content.length < 12) {
            $(".pagination").hide();
        } else {
            $(".pagination").show();
        }
    }
});