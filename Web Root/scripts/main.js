require.config({
    urlArgs: 'bust=v0.0.0'
});

require(['lib/index', 'utils/app'], function (lib, app) {
    console.log('running main.js');
    console.log('loaded libraries', lib);
    window.lib = lib;
    window.app = app;
    lib.ko.applyBindings(app);
});
