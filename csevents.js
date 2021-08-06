(function (a, b, c, d) {
    var e = {exports: {}};
    e.exports;
    (function () {
        var f = a.csq;
        f.execStart = a.performance && a.performance.now && a.performance.now();
        // console.log(f.version);

        // f.action = '//w.cs.com/ContactUS/send';
        // f.action = '//w.cs.com/fb/tr';
        // f.action = 'http://conversion-api.deepin/fb/tr';
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
            ci.name = decodeURIComponent("trackId");
            ci.value = f.trackId;
            form.appendChild(ci);

            var ci = b.createElement("input");
            ci.name = decodeURIComponent("trackEvent");
            ci.value = arg[1];
            form.appendChild(ci);

            if (arg[1] == "PageView") {
                var ci = b.createElement("input");
                ci.name = decodeURIComponent("trackUrl");
                ci.value = c.href;
                form.appendChild(ci);
            }

            if (arg.length > 2) {
                var obj = arg[2];
                for (let key in obj) {
                    var ci = b.createElement("input");
                    ci.name = decodeURIComponent(key);
                    ci.value = obj[key];
                    form.appendChild(ci);
                }
            }

            // form.parentNode && form.parentNode.removeChild(form);
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