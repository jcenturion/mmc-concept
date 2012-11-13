Mule.DeploymentsListContainer = Ember.ContainerView.create({
    tagName: 'div',
    classNames: ['span8', 'list'],
    childViews: ['toolbar', 'list', 'pager'],
    toolbar: Mule.DeploymentsToolbarView.create({
        controller: Mule.DeploymentsToolbarController.create({
            content: model
        })
    }),
    list: Mule.DeploymentsListView.create({
        controller: Mule.DeploymentsListController.create({
            content: model
        })
    }),
    pager: Mule.DeploymentsPagerView.create({
        controller: Mule.DeploymentsPagerController.create({
            content: model
        })
    })
});