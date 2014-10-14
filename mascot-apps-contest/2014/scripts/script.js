(function ($) {
    $.fn.konami = function (callback) {
        var codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        var history = [];

        $(this).keydown(function (e) {
            history.push(e.keyCode);
            if (history.length > codes.length) {
                history.shift();
            }
            if (history.length == codes.length && JSON.stringify(history) == JSON.stringify(codes)) {
                callback();
            }
        });
        return this;
    }
})(jQuery);
$(function () {
    "use strict";
    var animeEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $(".face").hover(function () {
        $(this)
        .addClass("animated rubberBand")
        .one(animeEnd, function () {
            $(this).removeClass("animated rubberBand");
        }).prev(".msg")
        .fadeIn()
        .addClass("animated tada")
        .one(animeEnd, function () {
            $(this).removeClass("animated tada").fadeOut();
        });
    }, function () {
    }).click(function () {
        var file = $(this).attr("data-image");
        $("#character-img").attr("src", "images/characters/cuts/" + file);
        $("#modal").modal();
    });

    // for new characters
    $(".new-character>img").click(function () {
        var file = $(this).attr("data-image");
        $("#character-img").attr("src", "images/characters/cuts/" + file);
        $("#modal").modal();
    });

    $("#character-img").click(function () {
        $("#modal").modal("hide");
    });

    var cinfo = [{
        name: "美雲このは",
        twitter: "MikumoConoHa",
        web: "https://www.conoha.jp/blog/conoha",
        job: "座敷童子",
        birthday: "？",
        age: "13歳ぐらい？",
        height: "150cm+α",
        like: "牛乳",
        cv: "上坂すみれ",
        audio: "conoha-chan.mp3",
        guideline: "https://www.conoha.jp/blog/conoha"
    }, {
        name: "美雲あんず",
        twitter: "MikumoAnzu",
        web: "http://cloud.gmo.jp/anzu/",
        job: "座敷童子",
        birthday: "？",
        age: "13歳くらい？",
        height: "150cm",
        like: "アップルパイ",
        cv: "内田真礼",
        audio: "anzu-chan.mp3",
        guideline: "http://cloud.gmo.jp/anzu/"
    }, {
        name: "暮井 慧",
        nick: "プロ生ちゃん",
        twitter: "pronama",
        web: "http://pronama.azurewebsites.net/pronama/",
        job: "女子高生",
        birthday: "1月11日",
        age: "17歳",
        height: "156cmくらい",
        like: "パイナップル",
        cv: "上坂すみれ",
        audio: "pronama-chan.mp3",
        guideline: "http://pronama.azurewebsites.net/pronama/guideline/"
    }, {
        name: "クラウディア・窓辺",
        twitter: "Claudia_Azure",
        web: "http://msdn.microsoft.com/ja-jp/hh508969",
        job: "SE",
        birthday: "11月20日",
        age: "○○歳",
        height: "170cm",
        like: "おにぎり",
        cv: "喜多村英梨",
        audio: "claudia-san.mp3",
        guideline: "http://msdn.microsoft.com/ja-jp/claudia00_03"
    }, {
        name: "大鳥こはく",
        nick: "ユニティちゃん",
        twitter: "UnityChan_PR",
        web: "http://unity-chan.com/",
        job: "女子高生",
        birthday: "8月13日",
        age: "17歳",
        height: "？",
        like: "カレーコロッケ",
        cv: "角元明日香",
        audio: "unity-chan.mp3",
        guideline: "http://unity-chan.com/download/guideline.html"
    }, {
        name: "クエリ・ラヴクラフト",
        nick: "クエリちゃん",
        twitter: "Query_chan",
        web: "http://www.query-chan.com/",
        job: "アイドル",
        birthday: "8月20日",
        age: "17歳",
        height: "？",
        like: "電池",
        cv: "？",
        audio: "query-chan.mp3",
        guideline: "http://www.query-chan.com/"
    }, {
        name: "東北ずん子",
        twitter: "t_zunko",
        web: "http://zunko.jp/",
        job: "女子高生",
        birthday: "10月27日",
        age: "17歳",
        height: "157cm",
        like: "ずんだ餅",
        cv: "佐藤聡美（VOICEROID+）",
        audio: "zunko-chan.mp3",
        guideline: "http://zunko.jp/guideline.html"
    }];

    for (var i = 0; i < cinfo.length; i++) {
        var c = cinfo[i];
        $(".face-wrapper:eq(" + i + ")").after(
            '<table class="table chara-details ">' +
                '<tbody>' +
                    '<tr><td><a href="' + c.web + '" target="_blank" title="' + ((c.nick) ? c.nick : "") + '">' + c.name + '</a></td></tr>' +
                    '<tr><td><a href="https://twitter.com/' + c.twitter + '" target="_blank">@' + c.twitter + '</a></td></tr>' +
                    '<tr><td>' + c.job + '</td></tr>' +
                    '<tr><td>' + c.birthday + '</td></tr>' +
                    '<tr><td>' + c.age + '</td></tr>' +
                    '<tr><td>' + c.height + '</td></tr>' +
                    '<tr><td>' + c.like + '</td></tr>' +
                    '<tr><td><a class="voice" href="#" data-audio="' + c.audio + '" title="CV: ' + c.cv + '"><i class="glyphicon glyphicon-volume-up"></i></a></td></tr>' +
                    '<tr><td><a href="' + c.guideline + '" target="_blank">ガイドライン</a></td></tr>' +
                '</tbody>' +
            '</table>'
        );
    }

    var player;
    $(".voice").click(function () {
        var file = $(this).attr("data-audio");
        $("#audio").html('<audio id="player" src="audio/' + file + '" type="audio/mp3" controls="controls"></audio>');
        player = new MediaElementPlayer("#player");
        player.play();
        return false;
    });

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-nav > li > a").addClass("top-nav-collapse");
        } else {
            $(".navbar-nav > li > a").removeClass("top-nav-collapse");
        }
    });

    var qas = [{
        q: "他のコンテストに応募した作品でもいい？",
        a: "いいよ！　そのコンテストの決まりで問題なければね。"
    }, {
        q: "他のコンテストにも応募してもいい？",
        a: "いいよ！　そのコンテストの決まりで問題なければね。"
    }, {
        q: "有料の作品を応募できる？",
        a: "有料部分は審査しないよ。体験版など無料で使えるようにしてね。"
    }, {
        q: "いくつも作品を応募してもいい？",
        a: "いいよ！　でも、対象者全員に贈られる賞品はとりあえず1個だけね。"
    }, {
        q: "応募した後に更新してもいい？",
        a: "いいよ！"
    }, {
        q: "主催・協賛団体のこのサイトでは紹介されていないキャラクターを使ってもいい？",
        a: "いいよ！　部門外部門にもならないよ。ただ、ちゃんと使えるキャラクターかどうかガイドラインなどを確認してね。"
    }, {
        q: "複数人で作った作品を応募してもいい？",
        a: "いいよ！　対象者全員に贈られる賞品はみんなにあげるよ。極端に多くなければだけど。"
    }, {
        q: "キャラクターコンプリート賞を狙いたいんだけど？",
        a: "キャラクター差し替え版みたいなのを作るのもありだし、友だちと協力して5人で1作品ずつ応募してグループ扱いというのもOKだよ。"
    }, {
        q: "協力できる友だちがいないんだけど？",
        a: "えっ……！？　応募時に希望すれば、勝手に応募者同士のグループを作ってキャラクターコンプリート賞をたくさんの人が受賞できるよう頑張るよ。"
    }, {
        q: "Oculus RiftやLeap Motionなどを使ってるんだけど？",
        a: "なんでも応募オッケーだけど、審査員によっては審査されない場合があるのことは了承してね。"
    }, {
        q: "ガイドラインやライセンスに違反していないかみてくれる？",
        a: "厳密にはチェックしないし問題ないことの保証もしないよ。でも、受け付け時に何か気付いたら知らせるよ。"
    }, {
        q: "アニメや漫画の二次創作もOK？",
        a: "権利関係がクリアになっていないものや、著作権などの権利を侵害しているものは受け付けられないよ！"
    }, {
        q: "応募すると著作権はどうなるの？",
        a: "どうもならないよ！　ただ、主催・協賛団体がスクリーンショットを添えて作品を紹介する場合があるよ。"
    }, {
        q: "キャラクターのこんなデータないの？",
        a: "みんなに直接きいてみて！"
    }, {
        q: "他の質問があるんだけど？",
        a: "私に Twitter で聞いてね！　プロ生にメールでもOK。"
    }];

    var qa_html = "";
    for (var i = 0; i < qas.length; i++) {
        qa_html +=
            '<h4>' + qas[i].q + '</h4>' +
            '<div class="character-card">' +
            '<div><div class="icon-pronama-chan pull-left"></div></div>' +
            '<div><p>' + qas[i].a + '</p></div>' +
            '</div>';
    }
    $("#qa-contents").html(qa_html);

    var works = [
        {
            title: "プロ生LTタイマー",
            author: "daisuke_nomura",
            group: "",
            url: "https://play.google.com/store/apps/details?id=jp.nomula.pronama.lttimer&hl=ja",
            image: "z001.png",
            thumb: "z001_thumb.png",
            desc: "（これは作品例の紹介で、応募作品ではありません。）"
        }, {
            title: "World Wide Traveling feat.Query-chan",
            author: "Nangok Software",
            group: "",
            url: "http://apps.microsoft.com/windows/ja-jp/app/world-wide-traveling-feat-query/2565b954-4a35-4cf8-80cb-df88ef7eafb5",
            image: "z002.png",
            thumb: "z002_thumb.png",
            desc: "（これは作品例の紹介で、応募作品ではありません。）"
        }, {
            title: "ユニティちゃんAR",
            author: "Unity Games Japan",
            group: "",
            url: "https://itunes.apple.com/app/id845892069",
            image: "z003.png",
            thumb: "z003_thumb.png",
            desc: "（これは作品例の紹介で、応募作品ではありません。）"
        }, {
            title: "作品募集中です",
            author: "pronama",
            group: "",
            url: "",
            image: "http://placehold.jp/3d4070/ffffff/300x300.png?text=%E5%8B%9F%E9%9B%86%E4%B8%AD",
            thumb: "http://placehold.jp/3d4070/ffffff/300x300.png?text=%E5%8B%9F%E9%9B%86%E4%B8%AD",
            desc: "作品募集中です"
        }
    ];

    var works_html = "";
    for (var i = 0; i < 4; i++) {
        works_html +=
            '<div class="col-sm-6 col-md-3">' +
            '<img src="' + ((works[i].thumb.lastIndexOf("http", 0) === 0) ? works[i].thumb : "images/works/" + works[i].thumb) + '" class="img-responsive img-rounded work hover-anime" data-anime="pulse" data-index="' + i + '" />' +
            '</div>';
    }
    $("#works-contents").html(works_html);

    // lang
    var jaKSwords = {
        "。でも": "。そやけど",
        "あります": "おます",
        "ありません": "おまへん",
        "あるの": "あるん",
        "あるよ": "あるんや",
        "あるんだ": "あんねん",
        "い。": "いちうわけや。",
        "いい": "ええ",
        "いから": "いさかい",
        "いただける": "くれはる",
        "いただければ": "もろたら",
        "いという": "いゆう",
        "いない": "おらへん",
        "います": "おります",
        "いる": "おる",
        "う、": "うわ、",
        "おもしろい": "オモロイ",
        "きない": "きへん",
        "ください": "おくんなはれ",
        "こちら": "ウチ",
        "さん": "はん",
        "しており": "しとり",
        "しても": "したかて",
        "しない": "せん",
        "しなかった": "せぇへんかった",
        "しました": "したんや",
        "します\！": "しまっせ！",
        "します。": "しまっせ。",
        "しますので": "するさかいに",
        "じゃ": "やったら",
        "すれば": "したら",
        "ただ、": "そやけど、",
        "だけど": "やけど",
        "だし、": "やし、",
        "だよ": "やで",
        "ちょっと": "ちーとばかし",
        "っていう": "ちう",
        "ってね\！": "ってーな！",
        "ってる": "っとる",
        "ていた": "とった",
        "ていて": "てて",
        "ております": "とります",
        "てね。": "てーな。",
        "てね\！": "てーな！",
        "てよね\！": "てーな！",
        "てる": "てんねん",
        "であり、": "なんやし、",
        "できません": "でけしまへん",
        "です": "や",
        "でも、": "そやけど、",
        "と思": "思",
        "わない": "わへん",
        "らない": "らへん",
        "れない": "れへん",
        "問題ない": "問題あらへん",
        "関係ない": "関係あらへん",
        "ない": "へん",
        "こんな": "こないな",
        "どうなる": "どないなる",
        "など": "やらなんやら",
        "なに": "なんや",
        "なので": "やから",
        "なら": "やったら",
        "なんだ": "なんや",
        "ね。": "や。",
        "ので、": "さかい、",
        "のは": "んは",
        "ます": "まんねん",
        "ません": "まへん",
        "もの": "もん",
        "られる": "られはる",
        "るのも": "んのも",
        "るよ。": "るで。",
        "るよ\！": "るで！",
        "んだ": "んや",
        "メッセージ": "文句",
        "何か": "何ぞ",
        "使っ": "つこう",
        "思った": "おもた",
        "私": "わて",
        "初心者": "どシロウト",
        "少なくとも": "なんぼなんでも",
        "多く": "ようけ",
        "無料": "タダ",
        "良い": "ええ",
        "connect\.facebook\.net\/ja_JP\/": "connect.facebook.net/ja_KS/"
    };

    // lang
    if (getParameterByName("lang") == "ja-KS") {
        $("p,li").each(function () {
            var txt = $(this).html();
            for (var key in jaKSwords) {
                if (jaKSwords.hasOwnProperty(key)) {
                    txt = txt.replace(new RegExp(key, "g"), jaKSwords[key]);
                }
            }
            $(this).html(txt);
        });
    }

    // end lang

    $(".work").click(function () {
        var w = works[$(this).attr("data-index")];
        $("#work-title").text(w.title);
        $("#work-image").attr("src", (w.image.lastIndexOf("http", 0) === 0) ? w.image : "images/works/" + w.image).attr("title", w.title);
        $("#work-desc").text(w.desc);
        $("#work-url").text(w.url).attr("href", w.url);
        $("#work-author").text(w.author);

        $("#work-modal").modal();
    });

    $(".hover-anime").hover(function () {
        var anime = $(this).attr("data-anime");
        $(this)
        .addClass("animated " + anime)
        .one(animeEnd, function () {
            $(this).removeClass("animated " + anime);
        })
    }, function () {
    });

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuad');
        event.preventDefault();
    });

    $(window).konami(function () {
        $(".icon-pronama-chan")
            .addClass("animated rotateIn")
            .one(animeEnd, function () {
                $(this).removeClass("animated rotateIn");
            });
    });
});
