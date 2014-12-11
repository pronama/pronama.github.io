(function ($) {
    "use strict";

    function q(str) {
        str = str.replace(/\"/g, "\"\"");
        return '"' + str + '"';
    }

    function tag(ary, val, elseVal) {
        return (w.tags.indexOf(val) >= 0) ? val : elseVal;
    }

    var t = "";
    for (var i = 0; i < works.length; i++) {
        var w = works[i];
        var id = i + 1;


        var ary = new Array(
            q('=HYPERLINK("http://pronama.github.io/mascot-apps-contest/2014/works.html?id=' + id + '","'+ id + '")'),
            q(w.title),
            q(w.creator.name),
            q(w.desc),
            tag(w.tags, "アプリ", "非アプリ"),
            tag(w.tags, "Android"),
            tag(w.tags, "iOS"),
            tag(w.tags, "Web"),
            tag(w.tags, "Windows"),
            tag(w.tags, "Windows ストアアプリ"),
            tag(w.tags, "Windows Phone"),
            tag(w.tags, "Mac"),
            tag(w.tags, "美雲このは"),
            tag(w.tags, "美雲あんず"),
            tag(w.tags, "プロ生ちゃん"),
            tag(w.tags, "クラウディア"),
            tag(w.tags, "ユニティちゃん"),
            tag(w.tags, "クエリちゃん"),
            tag(w.tags, "東北ずん子"),
            tag(w.tags, "ハッカドール1号")
            );


        t += ary.join(",") + "\n";

    }
    $("#out").html(t);
    window.clipboardData.setData("text", t);
})(jQuery);