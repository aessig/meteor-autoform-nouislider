Package.describe({
  name: 'aessig:autoform-nouislider',
  summary: 'Dual value slider for autoform.',
  version: '0.2.0_9',
  git: 'https://github.com/aessig/meteor-autoform-nouislider'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('rcy:nouislider@7.0.7_2');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles([
    'autoform-nouislider.html',
    'autoform-nouislider.js',
    'autoform-nouislider.css'
  ], 'client');
});
