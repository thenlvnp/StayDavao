// Initialize Modules
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync").create();
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-terser");
const imagemin = require("gulp-imagemin");

// File paths
const files = {
  scssPath: "./src/sass/**/*.scss",
  jsPath: "./src/js/*.js",
  imgPath: "./src/img/*"
};
// sassTask
function scssTask() {
  return src(files.scssPath)
    .pipe(
      plumber({
        errorHandler: function(err) {
          console.log(err);
          this.emit("end");
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("/maps"))
    .pipe(dest("./app/css"))
    .pipe(browsersync.stream());
}
// jsTask
function jsTask() {
  return src(files.jsPath)
    .pipe(concat("app.js"))

    .pipe(dest("./app/js"));

  //   .pipe(uglify()) ADD WHEN DONE
}
// imageTask
function imageTask() {
  return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest("./app/img"));
}
//browserSync
function liveReload() {
  browsersync.init({
    server: {
      baseDir: "./app"
    }
  });
  watch([files.scssPath, files.jsPath], parallel(scssTask, jsTask));
  watch(["./app/*.html", "./app/css/*.css", "./app/js/*.js"]).on(
    "change",
    browsersync.reload
  );
}

// Default
exports.default = series(parallel(scssTask, jsTask), liveReload);
exports.image = imageTask;
