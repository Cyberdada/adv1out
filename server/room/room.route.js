var room_schema_1 = require("./room.schema");
var mongoose = require("mongoose");
function save(req, res) {
    var room = mongoose.model("room", room_schema_1.roomSchema);
    if (req.body._id === null || req.body._id === undefined) {
        req.body._id = new mongoose.Types.ObjectId();
    }
    room.update({ _id: req.body._id }, req.body, { upsert: true }, function (err, newItm) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(newItm);
    });
}
exports.save = save;
function load(req, res) {
    var room = mongoose.model("room", room_schema_1.roomSchema);
    var q = room.find({}).sort("name");
    q.exec(function (err, db_articles) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(db_articles);
    });
}
exports.load = load;
function loadById(req, res) {
    var room = mongoose.model("room", room_schema_1.roomSchema);
    room.findById(req.params.id, function (err, db_article) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        res.json(db_article);
    });
}
exports.loadById = loadById;
function loadByDungeonId(req, res) {
    var room = mongoose.model("room", room_schema_1.roomSchema);
    var q = room.find({ "DungeonId": req.params.dungeonId }).sort("name")
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
//# sourceMappingURL=room.route.js.map