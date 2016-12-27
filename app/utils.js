define([], function() {
    var utilsInstance = null;

    return (function() {
        var prepareConsoleArguments = function(originalArguments) {
            var args = Array.prototype.slice.call(originalArguments);
            args[0] = "[" + (new Date()).toLocaleString() + "] [" + args[0] + "]";
            args.unshift("color:#337ab7; background:#F5F5DC; font-weight:bold;");
            args.unshift("%c%s");

            return args;
        };

        utilsInstance = utilsInstance || {
            msg: {
                trace: function() {
                    console.trace.apply(console, prepareConsoleArguments(arguments));
                },
                log: function() {
                    console.log.apply(console, prepareConsoleArguments(arguments));
                },
            },
        };

        return utilsInstance;
    })();
});
