var mongoose = require("mongoose");
exports.historySchema = new mongoose.Schema({
    description: String,
    modificationDate: Date,
    modifiedBy: {
        name: String,
        extid: String } }, { _id: false });
//# sourceMappingURL=historySchema.js.map