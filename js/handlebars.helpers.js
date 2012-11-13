Handlebars.registerHelper('iconByStatus', function () {
    var template = Handlebars.compile($("#deployments-list-icon-status-template").html()),
        result = template({ title: "service running OK", icon: "icon-ok" });

    if (this.status === 'down') {
        result = template({ title: "service down", icon: "icon-download" });
    } else if (this.status === 'deploying') {
        result = template({ title: "deploying", icon: "icon-roundabout" });
    } else if (this.status === 'redeploying') {
        result = template({ title: "re-deploying", icon: "icon-repeat" });
    } else if (this.status === 'not-deployed') {
        result = template({ title: "service not-deployed", icon: "icon-pause" });
    }

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('pager', function () {
    var result = '<li class="active page" data-index="1"><a href="#">1</a></li>',
        index,
        i;

    for (i = 1; i < this.content.pages; i++) {
        index = (i + 1);
        result += '<li class="page" data-index="' +
                  index + '"><a href="#">' +
                  index + '</a></li>';
    }

    return new Handlebars.SafeString(result);
});