var mongoose = require("mongoose");
exports.flagSchema = new mongoose.Schema({
    name: String,
    type: String,
    value: mongoose.Schema.Types.Mixed
}, { _id: false });
//# sourceMappingURL=flagSchema.js.map