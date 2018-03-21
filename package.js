Package.describe({
  summary: 'Fork of jamesgibson14/meteor-synced-cron. Define and run scheduled jobs across multiple servers.',
  version: '1.1.3',
  name: 'ajlouie:meteor-synced-cron',
  git: 'https://github.com/ajlouie/meteor-synced-cron.git'
});

Npm.depends({later: '1.2.0', timezone:'0.0.41'});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3');
  api.use([
    'dburles:mongo-collection-instances@0.3.5',
    'underscore',
    'check',
    'mongo',
    'logging',
  ], 'server');
  api.addFiles(['synced-cron-server.js'], 'server');
  api.export(['SyncedCron'], 'server');
});

Package.onTest(function (api) {
  api.use([
    'ajlouie:meteor-synced-cron',
    'tinytest',
    'underscore',
    'logging',    
  ], 'server');
  api.addFiles('synced-cron-tests.js', ['server']);
});
