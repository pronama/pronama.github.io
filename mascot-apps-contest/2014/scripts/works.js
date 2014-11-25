(function ($) {
    "use strict";

    function getDomain(url) {
        var r = new RegExp("\/\/(.+?)\/");
        return r.exec(url)[1];
    }

    var id = getParameterByName("id");
    var creatorName = getParameterByName("creator");
    var tag = getParameterByName("tag");
    var group = getParameterByName("group");

    var count = 0;
    var html = "";
    for (var i = works.length - 1; i >= 0; i--) {
        var w = works[i];

        if (id && w.id != id) continue;
        if (creatorName && w.creator.name != creatorName) continue;
        if (tag && w.tags.indexOf(tag) < 0) continue;
        if (group && w.group != group) continue;

        count++;

        // urls
        var urls = "";
        for (var j = 0; j < w.urls.length; j++) {
            urls += '<span><i class="glyphicon glyphicon-globe"></i> <a href="' + w.urls[j] + '" target="_blank">' + getDomain(w.urls[j]) + '</a></span> ';
        }

        // creator
        var creator = "";
        if (w.creator.twitter) {
            creator = '<a href="https://twitter.com/' + w.creator.twitter + '" target="_blank"><img src="http://www.paper-glasses.com/api/twipi/' + w.creator.twitter + '/mini" class="img-responsive img-rounded" style="display:inline-block;" /></a> ';
        }
        creator += '<span><a href="works.html?creator=' + encodeURIComponent(w.creator.name) + '">' + w.creator.name + '</a> さん ';
        if (w.creator.urls) {
            for (var k = 0; k < w.creator.urls.length; k++) {
                creator += '<a href="' + w.creator.urls[k] + '" target="_blank">' + getDomain(w.creator.urls[k]) + '</a>';
            }
        }
        creator += '</span>';

        // tags
        var tags = "";
        for (j = 0; j < w.tags.length; j++) {
            tags += '<a class="label label-primary" href="works.html?tag=' + encodeURIComponent(w.tags[j]) + '">' + w.tags[j] + '</a> ';
        }

        if (w.group) {
            tags += '<a class="label label-default" href="works.html?group=' + encodeURIComponent(w.group) + '">' + w.group + '</a> ';
        }

        html +=
            '<div class="row works-card">' +
                '<div class="col-xs-3 col-md-3">' +
                    ((!id) ? '<a href="works.html?id=' + w.id + '">' : '') +
                    '<img src="images/works/' + w.thumb + '" class="img-responsive img-rounded" />' +
                    ((!id) ? '</a>' : '') +
                '</div>' +
                '<div class="col-xs-9 col-md-9">' +
                    '<h3>' + ((!id) ? '<a href="works.html?id=' + w.id + '">' + w.title + '</a>' : w.title) + '</h3>' +
                    '<p>' + w.desc.replace(/\n/g, "<br />") + '</p>' +
                    '<p>' + urls + '</p>' +
                    '<p class="author">' +
                    creator +
                    '</p>' +
                    '<p>' +
                    tags +
                    '</p>' +
                '</div>' +
            '</div>';

        if (id) {
            var ss = "";
            for (var j = 0; j < w.images.length; j++) {
                var div = '<div class="col-md-4"><img src="images/works/' + w.images[j] + '" class="img-responsive img-thumbnail screenshot" /></div>'
                if (j % 3 == 2) {
                    ss += '<div class="row">' + div + '</div>';
                } else {
                    ss += div;
                }
            }
            $("#screenshots").html(ss);
            $("title").text(w.title + ' | マスコットアプリ文化祭 2014');
        }
    }

    $(".container>.row:first").after(html);

    if (tag) {
        $("#search-param").html("Tag: " + tag + " （" + count + "件） " + '<a href="./works.html">全表示</a>');
    } else if (creatorName) {
        $("#search-param").html("Creator: " + creatorName + " さん （" + count + "件） " + '<a href="./works.html">全表示</a>');
    } else if (group) {
        $("#search-param").html("Group: " + group + " （" + count + "件） " + '<a href="./works.html">全表示</a>');
    } else if (id) {
        $("#works-link").removeClass("hidden");
    }


    $(".screenshot").click(function () {
        $("#work-image").attr("src", $(this).attr("src"));
        $("#work-modal").modal();
    });
    $("#work-image").click(function () {
        $("#work-modal").modal("hide");
        $("#work-image").attr("src", "");
    });

})(jQuery);