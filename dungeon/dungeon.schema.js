var mongoose = require("mongoose");
exports.dungeonSchema = new mongoose.Schema({
    author: String,
    created: { type: Date, default: Date.now },
    name: String,
    maxUsers: Number
});
//# sourceMappingURL=dungeon.schema.js.map