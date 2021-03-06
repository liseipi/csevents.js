(function (a, b, c, d) {
    var e = {exports: {}};
    e.exports;
    (function () {
        var f = a.csq;
        f.execStart = a.performance && a.performance.now && a.performance.now();
        // console.log(f.version);

        f.action = 'https://'+document.domain+'/fb/tr';
        f.runMethod = function (arguments) {
            switch (arguments[0]) {
                case "init":
                    runInitTrack(arguments[1]);
                    break;
                case "track":
                    runTrack(arguments);
                    break;
                default:
                    console.log("Error");
            }
        };

        var runInitTrack = function (arg) {
            f.trackId = arg;
        };

        var runTrack = function (arg) {
            var e = "cs" + Math.random().toString().replace(".", "");
            var form = b.createElement("form");
            form.method="post";
            form.action = f.action;
            form.target = e;
            form.acceptCharset = "utf-8";
            form.style.display = "none";

            var i = b.createElement("iframe");
            i.src = "about:blank";
            i.id = e;
            i.name = e;
            form.appendChild(i);

            var ci = b.createElement("input");
            ci.name = decodeURIComponent("track_id");
            ci.value = f.trackId;
            form.appendChild(ci);

            var en = b.createElement("input");
            en.name = decodeURIComponent("event_name");
            en.value = arg[1];
            form.appendChild(en);

            var ei = b.createElement("input");
            ei.name = decodeURIComponent("event_id");
            ei.value = "event.id." + e;
            form.appendChild(ei);

            // if (arg[1] == "PageView") {
            //     var tu = b.createElement("input");
            //     tu.name = decodeURIComponent("event_source_url");
            //     tu.value = c.href;
            //     form.appendChild(tu);
            // }

            var esu = b.createElement("input");
            esu.name = decodeURIComponent("event_source_url");
            esu.value = c.href;
            form.appendChild(esu);

            if (arg.length > 2) {
                var obj = arg[2];
                for (let key in obj) {
                    var ki = b.createElement("input");
                    ki.name = decodeURIComponent(key);
                    ki.value = obj[key];
                    form.appendChild(ki);
                }
            }
            b.body != null && b.body.appendChild(form);
            form.submit();
            // form.parentNode && form.parentNode.removeChild(form);
        };

        f.callMethod = function () {
            f.runMethod(arguments);
        };

        if (f.queue.length > 0) {
            for (let i = 0; i < f.queue.length; i++) {
                f.callMethod.apply(undefined, f.queue[i]);
            }
        }

    })();
})(window, document, location, history);