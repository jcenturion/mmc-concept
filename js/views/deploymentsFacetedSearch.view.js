Mule.DeploymentsFacetedSearchView = Ember.View.extend({
    controller: null,
    templateName: 'deployments-faceted-search-template',
    tagName: 'div',
    elementId: 'faceted-search',
    classNames: ['accordion'],
    didInsertElement: function () {
        var that = this;

        this.$().on('show', function (e) {
            $(e.target).parent()
                       .find(".accordion-heading")
                       .find("i")
                       .removeClass("icon-chevron-right")
                       .addClass("icon-chevron-down");
        }).on('hide', function (e) {
            $(e.target).parent()
                       .find(".accordion-heading")
                       .find("i")
                       .removeClass("icon-chevron-down")
                       .addClass("icon-chevron-right");
        });

        this.$().find(":checkbox").on('click', function (e) { that.applyFilter(e); });
    },
    applyFilter: function (e) {
        var current = $(e.currentTarget),
            checkboxes = $("#faceted-search").find(":checkbox");

        if (current.is(":checked")) {
            checkboxes.removeAttr("checked");
            current.attr("checked", "checked");
            this.controller.applyFilter({
                value: current.attr('data-value'),
                type: current.attr("data-filter-type")
            });

            if (this.controller.content.content.length < 12) {
                $(".pagination").hide();
            } else {
                $(".pagination").show();
            }
        }

        if (checkboxes.is(":checked") === false) {
            this.controller.clearFilter();
            $(".pagination").show();
        }

        $(".nav.centered").find("li").removeClass("active");
    }
});