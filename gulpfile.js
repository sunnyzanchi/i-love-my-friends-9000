const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const nodemon = require('gulp-nodemon');
const pump = require('pump');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config.js');

const xjsvue = /.*src.*(?:\.js|\.vue)/;
const xscss = /.*\.scss/;

gulp.task('build-scss', function(cb){
  pump([
    gulp.src('src/scss/main.scss'),
    sass({includePaths: ['scss', 'scss/partials']}),
    rename('style.css'),
    gulp.dest('public/css')
  ],cb)
});

gulp.task('webpack', function(cb){
  pump([
    gulp.src('src/js/main.js'),
    webpack(webpackConfig),
    gulp.dest('public/js')
  ],cb);
})

gulp.task('default', ['build-scss', 'webpack'], function(cb){
  return nodemon({
    ignore: ['public/**/*.*'],
    scripts: {start: 'node bin/www'},
    tasks(changeFiles){
      var tasks = [];
      changeFiles.forEach(file=>{
        if(xjsvue.test(file)) tasks.push('webpack');
        if(xscss.test(file)) tasks.push('build-scss');
      });
      return tasks;
    },
    watch: ['**/*.*']
  })
});
