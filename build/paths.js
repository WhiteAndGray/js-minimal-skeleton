var srcRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: srcRoot,
  source: srcRoot + '**/*.js',
  html: srcRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
