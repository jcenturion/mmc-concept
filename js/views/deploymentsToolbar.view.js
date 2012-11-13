Mule.DeploymentsToolbarView = Ember.View.extend({
    controller: null,
    templateName: 'deployments-toolbar-template',
    tagName: 'div',
    classNames: ['span12', 'topbar', 'no-margin'],
    didInsertElement: function () {
        var $dateRange = $(this.get('element')).find('.daterange');

        $dateRange.daterangepicker(
            {
                ranges: {
                    'Today': ['today', 'today'],
                    'Yesterday': ['yesterday', 'yesterday'],
                    'Last 7 Days': [Date.today().add({ days: -6 }), 'today'],
                    'Last 30 Days': [Date.today().add({ days: -29 }), 'today'],
                    'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                    'Last Month': [Date.today().moveToFirstDayOfMonth().add({ months: -1 }), Date.today().moveToFirstDayOfMonth().add({ days: -1 })]
                }
            },
            function (start, end) {
                $dateRange.find('span')
                          .html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
            }
        );

        $dateRange.find('span').html(Date.today().add({ days: -29 }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));
    }
});