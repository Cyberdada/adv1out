var player_schema_1 = require("./player.schema");
var mongoose = require("mongoose");
function save(req, res) {
    var player = mongoose.model("player", player_schema_1.playerSchema);
    if (req.body._id === null || req.body._id === undefined) {
        req.body._id = new mongoose.Types.ObjectId();
    }
    player.update({ _id: req.body._id }, req.body, { upsert: true }, function (err, newItm) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(newItm);
    });
}
exports.save = save;
function copyFromTemplate(req, res) {
    var player = mongoose.model("player", player_schema_1.playerSchema);
    player.findById(req.params.id, function (err, db_article) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        var newPlayer = db_article;
        newPlayer._id = new mongoose.Types.ObjectId();
        newPlayer.inventory.forEach(function (itm) {
            itm._id = new mongoose.Types.ObjectId();
            itm.playerId = newPlayer._id;
            itm.roomId = newPlayer.roomId;
        });
        newPlayer.save();
        res.json(newPlayer);
    });
}
exports.copyFromTemplate = copyFromTemplate;
function load(req, res) {
    var player = mongoose.model("player", player_schema_1.playerSchema);
    var q = player.find({}).sort("name");
    q.exec(function (err, db_articles) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        res.json(db_articles);
    });
}
exports.load = load;
function loadById(req, res) {
    var player = mongoose.model("player", player_schema_1.playerSchema);
    player.findById(req.params.id, function (err, db_article) {
        if (err) {
            return res.json({ status: 500, error: err });
        }
        ;
        res.json(db_article);
    });
}
exports.loadById = loadById;
function loadByDungeonId(req, res) {
    var player = mongoose.model("player", player_schema_1.playerSchema);
    var q = player.find({ "dungeonId": req.params.dungeonId }).sort("name")
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
    var player = mongoose.model("player", player_schema_1.playerSchema);
    var q = player.find({ "roomId": req.params.roomId }).sort("name")
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
//# sourceMappingURL=player.route.js.map