var dungeon_schema_1 = require("./dungeon.schema");
var mongoose = require("mongoose");
function save(req, res) {
    var dungeon = mongoose.model("dungeon", dungeon_schema_1.dungeonSchema);
    console.log(JSON.stringify(req.body));
    if (req.body._id === null || req.body._id === undefined) {
        req.body._id = new mongoose.Types.ObjectId();
    }
    dungeon.update({ _id: req.body._id }, req.body, { upsert: true }, function (err, newItm) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(newItm);
    });
}
exports.save = save;
function load(req, res) {
    console.log("getting dungeons");
    var dungeon = mongoose.model("dungeon", dungeon_schema_1.dungeonSchema);
    var q = dungeon.find({}).sort("name");
    q.exec(function (err, db_articles) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(db_articles);
    });
}
exports.load = load;
function loadById(req, res) {
    var dungeon = mongoose.model("dungeon", dungeon_schema_1.dungeonSchema);
    dungeon.findById(req.params.id, function (err, db_article) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        res.json(db_article);
    });
}
exports.loadById = loadById;
//# sourceMappingURL=dungeon.route.js.map