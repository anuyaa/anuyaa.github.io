//This is an iife function
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulp_plugins = require('gulp-load-plugins')({ lazy: false });
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var babelify = require('babelify'); // Used to convert ES6 & JSX to ES5
var sass = require('gulp-sass');

//var sourcemaps = require('gulp-sourcemaps');
//var gutil = require('gulp-util');
//var buffer = require('vinyl-buffer');

// Configuration for Gulp
var config = {
  js: {
    src: 'index.js',
    watch: './app/js/**/*',
    outputDir: './dist/',
    outputFile: 'bundle.js',
  },
};

gulp.task('Hello', function(){
	console.log('hello');
});

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('sass', function () {
	var input = './app/stylesheets/*.scss';
	var output = './dist/css';
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});


gulp.task('copy', function() {
   gulp.src('./app/js/doc/*.*')
   .pipe(gulp.dest('./dist/doc'));
});


gulp.task('build', ['sass', 'copy'],function () {
	return browserify(config.js.src)
		.transform(babelify, {presets: ['es2015', 'react']})
		.bundle()
		.on('error',function(e){
			gutil.log(e);
		})
		.pipe(source(config.js.outputFile)) //data that brwoserify emits need to convert so that gulp can consume it
		.pipe(gulp.dest(config.js.outputDir));
});


gulp.task('serve',['build'], function () {
	return gulp_plugins.connect.server({
		host: '0.0.0.0',
		livereload: true,
		port: process.env.PORT || 8000,
		root: 'dist'
	});
});
