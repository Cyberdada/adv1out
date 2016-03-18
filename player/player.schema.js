var mongoose = require("mongoose");
var flagSchema_1 = require("../schemas/flagSchema");
var artifact_schema_1 = require("../artifact/artifact.schema");
exports.playerSchema = new mongoose.Schema({
    name: String,
    dungeonId: mongoose.Schema.Types.ObjectId,
    picture: String,
    isActive: Boolean,
    isAlive: Boolean,
    isTemplate: Boolean,
    lastMove: Date,
    flags: [flagSchema_1.flagSchema],
    inventory: [artifact_schema_1.artifactSchema],
    roomId: mongoose.Schema.Types.ObjectId
});
//# sourceMappingURL=player.schema.js.map