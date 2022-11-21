const concat = require('concat');

(async function build() {
  const files = [
    './dist/micro-frontend-angular/runtime.js',
    './dist/micro-frontend-angular/polyfills.js',
    './dist/micro-frontend-angular/main.js'
  ];

  await concat(files, './dist/micro-frontend-angular/all.js');

})();
