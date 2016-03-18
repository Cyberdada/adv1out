var artifact_schema_1 = require("./artifact.schema");
var mongoose = require("mongoose");
function save(req, res) {
    var artifact = mongoose.model("artifact", artifact_schema_1.artifactSchema);
    if (req.body._id === null || req.body._id === undefined) {
        req.body._id = new mongoose.Types.ObjectId();
    }
    artifact.update({ _id: req.body._id }, req.body, { upsert: true }, function (err, newItm) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(newItm);
    });
}
exports.save = save;
function load(req, res) {
    var artifact = mongoose.model("artifact", artifact_schema_1.artifactSchema);
    var q = artifact.find({}).sort("name");
    q.exec(function (err, db_articles) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(db_articles);
    });
}
exports.load = load;
function loadById(req, res) {
    var artifact = mongoose.model("artifact", artifact_schema_1.artifactSchema);
    artifact.findById(req.params.id, function (err, db_article) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        res.json(db_article);
    });
}
exports.loadById = loadById;
function loadByUserId(req, res) {
    var artifact = mongoose.model("artifact", artifact_schema_1.artifactSchema);
    var q = artifact.find({ "userId": req.params.userId }).sort("name")
        .sort("name");
    q.exec(function (err, db_articles) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        res.json(db_articles);
    });
}
exports.loadByUserId = loadByUserId;
function loadByDungeonId(req, res) {
    var artifact = mongoose.model("artifact", artifact_schema_1.artifactSchema);
    var q = artifact.find({ "dungeonId": req.params.userId }).sort("name")
        .sort("name");
    q.exec(function (err, db_articles) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        res.json(db_articles);
    });
}
exports.loadByDungeonId = loadByDungeonId;
function loadByRoomId(req, res) {
    var artifact = mongoose.model("artifact", artifact_schema_1.artifactSchema);
    var q = artifact.find({ "roomId": req.params.userId }).sort("name")
        .sort("name");
    q.exec(function (err, db_articles) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        res.json(db_articles);
    });
}
exports.loadByRoomId = loadByRoomId;
//# sourceMappingURL=artifact.route.js.map