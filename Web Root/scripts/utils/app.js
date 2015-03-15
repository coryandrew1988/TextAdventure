define(['lib/index'], function (lib) {
    var _ = lib._;
    var $ = lib.$;
    var ko = lib.ko;
    
    var terrainTypes = [{
        name: 'grassland'
    }, {
        name: 'road'
    }, {
        name: 'forest'
    }];
    
    var map = {
        width: 16,
        height: 16,
        grid: []
    };
    
    _.each(_.range(0, map.width), function (i) {
        map.grid[i] = [];
        _.each(_.range(0, map.height), function (j) {
            map.grid[i][j] = {
                terrainType: terrainTypes[Math.random() * terrainTypes.length | 0],
                objects: [],
                describe: function () {
                    return 'It\'s ' + this.terrainType.name + '!';
                }
            };
        });
    });
    
    var player = {
        x: 0,
        y: 0,
        look: function () {
            return { text: map.grid[player.x][player.y].describe() };
        }
    };
    
    var gameUI = {
        outputMessages: ko.observableArray([{ text: 'Some sample output.' }]),
        inputText: ko.observable('Some sample input.'),
        processInput: function () {
            game.update();
        },
        afterRenderOutputMessages: function () {
            var outputElement = $('.output')[0];
            outputElement.scrollTop = outputElement.scrollHeight;
        }
    };
    
    var game = {
        map: map,
        read: function () {
            var inputText = gameUI.inputText();
            gameUI.inputText('');
            return inputText;
        },
        write: function (message) {
            gameUI.outputMessages.push(message);
        },
        update: function () {
            game.write(player.look());
            game.write({ text: 'You said: ' + game.read() });
        }
    };
    
    $(window).on('keyup', function (event) {
        if (event.keyCode === 13) {
            gameUI.processInput();
        }
    });

    return {
        template: {
            name: 'mainTemplate',
            data: gameUI
        }
    };
});
