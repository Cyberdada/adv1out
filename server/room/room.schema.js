var mongoose = require("mongoose");
var actionSchema_1 = require("../schemas/actionSchema");
var flagSchema_1 = require("../schemas/flagSchema");
var exitSchema_1 = require("../schemas/exitSchema");
exports.roomSchema = new mongoose.Schema({
    name: String,
    dungeonId: mongoose.Schema.Types.ObjectId,
    picture: String,
    description: String,
    exits: [exitSchema_1.exitSchema],
    type: String,
    actions: [actionSchema_1.actionSchema],
    flags: [flagSchema_1.flagSchema]
});
//# sourceMappingURL=room.schema.js.map