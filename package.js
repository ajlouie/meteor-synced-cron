Package.describe({
  summary: 'Fork of marcuzy/meteor-synced-cron. Define and run scheduled jobs across multiple servers.',
  version: '1.0.0',
  name: 'ajlouie:meteor-synced-cron',
  git: 'https://github.com/ajlouie/meteor-synced-cron.git'
});

Npm.depends({later: '1.2.0', timezone:'1.0.6'});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.3.2');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['synced-cron-server.js'], 'server');
  api.export(['SyncedCron'], 'server');
});

Package.onTest(function(api) {
  api.use(['ajlouie:meteor-synced-cron', 'tinytest']);
  api.addFiles('synced-cron-tests.js', ['server']);
});
