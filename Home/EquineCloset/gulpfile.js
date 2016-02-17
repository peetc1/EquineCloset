
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify"),
    del = require("del");

gulp.task("styles", function () {
    return sass("Content/site.scss", { style: "expanded" })
        .pipe(autoprefixer("last 2 version"))
        .pipe(gulp.dest("Content/Site.css"))
        .pipe(notify({ message: "Styles task complete" }));
});

gulp.task("default", function () {
    gulp.start("styles");
});