Package.describe({
  name: 'barbatus:ionic-autocomplete',
  summary: 'Ionic autocomplete control',
  version: '0.2.2',
  git: 'https://github.com/barbatus/meteor-ionic-autocomplete',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('urigo:ionic@1.0.0', ['client']);

  api.addFiles([
    'ion-autocomplete/src/ion-autocomplete.css',
    'ion-autocomplete/src/ion-autocomplete.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('barbatus:ionic-autocomplete');
});
