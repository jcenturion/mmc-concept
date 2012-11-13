Mule.DeploymentsFacetedSearchContainer = Ember.ContainerView.create({
    tagName: 'div',
    classNames: ['span3', 'faceted-search'],
    childViews: ['facetedSearch'],
    facetedSearch: Mule.DeploymentsFacetedSearchView.create({
        controller: Mule.DeploymentsFacetedSearchController.create({
            content: model
        })
    })
});