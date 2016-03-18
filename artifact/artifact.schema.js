var mongoose = require("mongoose");
var actionSchema_1 = require("../schemas/actionSchema");
var flagSchema_1 = require("../schemas/flagSchema");
exports.artifactSchema = new mongoose.Schema({
    name: String,
    type: String,
    dungeonId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    roomId: mongoose.Schema.Types.ObjectId,
    flags: [flagSchema_1.flagSchema],
    actions: [actionSchema_1.actionSchema]
});
//# sourceMappingURL=artifact.schema.js.map