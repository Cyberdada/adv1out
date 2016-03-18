var mongoose = require("mongoose");
exports.exitSchema = new mongoose.Schema({
    name: String,
    leadsToRoomId: mongoose.Schema.Types.Mixed
}, { _id: false });
//# sourceMappingURL=exitSchema.js.map