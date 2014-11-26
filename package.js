Package.describe({
  summary: "Meteor smart package for JQuery Before/After Plugin",
  version: "0.0.1",
  git: "https://github.com/lawshe/before-after.git"
});


Package.on_use(function (api) {
  api.use('jquery@1.0.0');
  api.use('mrt:jquery-ui@1.9.2');  
  api.addFiles('jquery.beforeafter-1.4.min.js','client');
});
