var gulp = require("gulp"),
    connect = require("gulp-connect");

gulp.task("start", function() {
    connect.server({
        root: "./app",
        port: 8081,
        livereload: true,
    });
});

// gulp.task("watch", ["lint"], function() {
//     gulp.watch(["**/*.html"], ["html"]);
//     gulp.watch(["**/*.js"], ["js"]);
// });

gulp.task("default", ["lint"], function() {
    // This will only run if the lint task is successful...
});
