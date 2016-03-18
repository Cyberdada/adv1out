/// <reference path="../types/lodash.d.ts" />
// Code for autopopulating dungeon. Not relevant anynore. 
var dungeon_model_1 = require('./dungeon.model');
var MAXROOMS = 10000;
var MINROOMS = 1;
var dungeonLogic = (function () {
    function dungeonLogic() {
    }
    dungeonLogic.prototype.createDungeon = function (totalRooms, types) {
        if (totalRooms > MAXROOMS) {
            throw "To many rooms.... Maximum is " + MAXROOMS;
        }
        if (totalRooms < MINROOMS) {
            throw "To few rooms.... Minimum is " + MINROOMS;
        }
        var nofsInRow = Math.floor(Math.sqrt(totalRooms));
        var rooms = new Array();
        for (var i = 0; i < totalRooms; i++) {
            var newRoom = new dungeon_model_1.roomModel;
            newRoom.index = i;
            newRoom.north = i < nofsInRow ? -1 : i - nofsInRow;
            newRoom.south = i + nofsInRow > totalRooms - 1 ? -1 : i + nofsInRow;
            newRoom.east = i % nofsInRow === nofsInRow - 1 ? -1 : i + 1;
            newRoom.west = i % nofsInRow === 0 ? -1 : i - 1;
            newRoom.type = this.setType(types);
            rooms.push(newRoom);
        }
    };
    dungeonLogic.prototype.setType = function (types) {
        var totsum = _.sumBy(types, 'probability');
        var stop = _.random(0, totsum);
        var current = 0;
        var retval = "";
        types.some(function (itm) {
            if (_.inRange(stop, current, current + itm.probability)) {
                retval = itm.name;
                return true;
            }
            current += itm.probability;
        });
        return retval;
    };
    return dungeonLogic;
})();
exports.dungeonLogic = dungeonLogic;
//# sourceMappingURL=dungeon.logic.js.map