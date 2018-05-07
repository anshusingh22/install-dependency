var npm = require('npm-cmd');
var Spinner = require('cli-spinner').Spinner;
 
var spinner = new Spinner('processing.. %s');
spinner.setSpinnerString('|/-\\');
spinner.start();

var packages = [
  "cookie-parser",
  "express"
]

npm.install(packages, {save: true}, function(err) {
  spinner.stop();
  if (err) {
    console.log('Installation failed.');
  } else {
    console.log(packages.join(", ")+' successfully installed'); 
  }       
});