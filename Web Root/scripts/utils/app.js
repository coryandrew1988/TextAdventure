define(['lib/index'], function (lib) {
    var _ = lib._;
    var $ = lib.$;
    var ko = lib.ko;
    
    var game = {
        outputMessages: ko.observableArray([{ text: 'Some sample output.' }]),
        inputText: ko.observable('Some sample input.'),
        processInput: function () {
            var inputText = game.inputText();
            game.inputText('');

            game.outputMessages.push({
                text: 'You said: ' + inputText
            });
        },
        afterRenderOutputMessages: function () {
            var outputElement = $('.output')[0];
            outputElement.scrollTop = outputElement.scrollHeight;
        }
    };
    
    $(window).on('keyup', function (event) {
        if (event.keyCode === 13) {
            game.processInput();
        }
    });

    return {
        template: {
            name: 'mainTemplate',
            data: game
        }
    };
});
