var mongoose = require("mongoose");
exports.conditionsResultsSchema = new mongoose.Schema({
    conditions: [{ artifactId: mongoose.Schema.Types.ObjectId,
            flag: String,
            operator: String
        }],
    results: [{
            command: String,
            artifactId: mongoose.Schema.Types.ObjectId,
            flag: String,
            value: mongoose.Schema.Types.Mixed
        }]
}, { _id: false });
exports.actionSchema = new mongoose.Schema({
    verb: String,
    conditionsResults: [exports.conditionsResultsSchema]
}, { _id: false });
//# sourceMappingURL=actionSchema.js.map