Mule.DeploymentCollection = Ember.ArrayProxy.extend({
    elements: [],
    pageSize: 12,
    pages: 2,
    content: [],
    page: 1,
    total: 0,
    init: function () {
        this.loadData();
        this.getPaged(this.page);
        this.pages = Math.ceil(this.elements.length / this.pageSize);

    },
    getNextPage: function () {
        var next = this.page + 1;

        return next <= this.pages ? next : this.pages;
    },
    getPrevPage: function () {
        var previous = this.page - 1;

        return previous >= 1 ? previous : 1;
    },
    getPaged: function (currentPage) {
        this.applyPagination(this.elements, currentPage);
    },
    applyPagination: function (elements, currentPage) {
        var previous = this.page - 1,
            next = this.page + 1,
            start,
            stop;

        if (currentPage === "prev") {
            this.page = previous >= 1 ? previous : 1;
        } else if (currentPage === "next") {
            this.page = next <= this.pages ? next : this.pages;
        } else {
            this.page = currentPage;
        }

        start = (this.page * this.pageSize) - this.pageSize;
        stop = this.page * this.pageSize;

        this.page = currentPage;

        this.set('content', elements.slice(start, stop));
    },
    applyFilter: function (filter) {
        var arr = [], i;

        for (i = 0; i < this.elements.length; i++) {
            if (this.elements[i][filter.type] === filter.value) {
                arr.push(this.elements[i]);
            }
        }

        this.pages = Math.ceil(this.elements.length / this.pageSize);
        this.set('content', arr);
        this.applyPagination(arr, 1);
    },
    clearFilter: function () {
        this.applyPagination(this.elements, 1);
    },
    loadData: function () {
        this.elements.push(Mule.Deployment.create(
            {
                name: 'example1',
                status: 'running',
                group: 'Group1',
                server: 'MuleServer3',
                serviceType: 'Single',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'smsservice',
                status: 'running',
                group: 'Group1',
                server: 'MuleServer3',
                serviceType: 'Single',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'HelloExample',
                status: 'running',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "false"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'service5',
                status: 'running',
                group: 'Group2',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'srv49',
                status: 'deploying',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'stockquote',
                status: 'down',
                group: 'Group2',
                server: 'MuleServer3',
                serviceType: 'Single',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'Service2',
                status: 'running',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'queuservice',
                status: 'running',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "false"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'broker7',
                status: 'not-deployed',
                group: 'Group2',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "false"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'loanbroker',
                status: 'down',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "false"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'example3',
                status: 'deploying',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'loanquote',
                status: 'redeploying',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "false"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'example7',
                status: 'ok',
                group: 'Group2',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "false"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'test3',
                status: 'not-deployed',
                group: 'Group2',
                server: 'MuleServer3',
                serviceType: 'Single',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'srv37',
                status: 'running',
                group: 'Group2',
                server: 'MuleServer3',
                serviceType: 'Single',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'srv39',
                status: 'running',
                group: 'Group1',
                server: 'MuleCluster',
                serviceType: 'Cluster',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
        this.elements.push(Mule.Deployment.create(
            {
                name: 'test9',
                status: 'running',
                group: 'Group2',
                server: 'MuleServer3',
                serviceType: 'Single',
                version: '3.2.0',
                reconciled: "true"
            }
        ));
    }
});