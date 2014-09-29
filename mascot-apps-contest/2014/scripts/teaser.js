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

    var names = ["pronama-chan", "anzu-chan", "conoha-chan", "claudia-san", "query-chan", "unity-chan"];
    var index = 0;
    $(window).konami(function () {
        var next = (index + 1) % names.length;

        $(".face")
            .removeClass("face-" + names[index])
            .addClass("animated flipInY face-" + names[next])
            .one(animeEnd, function () {
                $(this).removeClass("animated flipInY");
            }).prev(".msg")
            .removeClass("msg2 msg-" + names[index])
            .addClass("msg-" + names[next])
            .fadeIn()
            .addClass("animated tada")
            .one(animeEnd, function () {
                $(this).removeClass("animated tada").fadeOut();
            });
        index = next;
    });

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
    });

    $(".question")
        .click(function () {
            $(this).hide();
            $($(this).attr("data-container"))
                .removeClass("hidden")
                .addClass("animated bounceIn");
        });

    $("#logo").hover(function () {
        $(this)
            .addClass("animated tada")
            .one(animeEnd, function () {
                $(this).removeClass("animated tada");
            });
    }, function () {
    });
});
