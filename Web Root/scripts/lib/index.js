require.config({
    paths: {
        'underscore': 'lib/underscore',
        'jquery': 'lib/jquery',
        'knockout': 'lib/knockout'
    }
});

define(['underscore', 'jquery', 'knockout'], function (_, $, ko) {
    return {
        _: _,
        $: $,
        ko: ko
    };
});
