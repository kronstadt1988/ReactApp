var gulp = require('gulp');
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');



gulp.task('stream', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(watch('./src/js/**/*.js'))
});

gulp.task('callback', function (cb) {
    watch('./src/js/**/*.js', function () {
        gulp.src(['./src/js/app.js', './src/js/*.js'])
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./src/'))
            
    });
});

gulp.task('browserify', function() {
    gulp.src(['./src/js/app.js', './src/js/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/'));

    var bundler = browserify({
        entries: ['./src/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
    // This is where you add uglifying etc.
        .pipe(gulp.dest('./build/js'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/js'));
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
gulp.task('default', ['stream','callback','browserify']);