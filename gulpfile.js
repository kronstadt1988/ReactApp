var gulp = require('gulp');
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    concat = require('gulp-concat'),
    babel = require('babelify');

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./src/js/app.jsx'], // Only need initial file, browserify finds the deps // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    }).transform(babel, {presets: ["es2015", "react"]});
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
    // This is where you add uglifying etc.
        .pipe(gulp.dest('./src/preset'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./src/preset'));
}); 

// I added this so that you see how to run two watch tasks

//gulp.task('css', function () {
  //  gulp.watch('styles/**/*.css', function () {
    //    return gulp.src('styles/**/*.css')
      //  .pipe(concat('main.css'))
      //  .pipe(gulp.dest('build/'));
    //});
//});


// Just running the two tasks
gulp.task('default', ['browserify']);