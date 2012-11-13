Mule.DeploymentsListContainer.appendTo(".deployments");
Mule.DeploymentsFacetedSearchContainer.appendTo(".deployments");
Mule.DeploymentsFilterView.create({
    controller: Mule.DeploymentsFilterController.create({
        content: model
    })
}).appendTo(".navbar.toolbar.bottom");