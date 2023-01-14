const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Wine = new Schema({
    vivino_id: { type: Number, require: true, unique: true },
    name: { type: String, require: true },
    country: { type: String, require: true },
    region: { type: String, require: true },
    winery: { type: String, require: true },
    volume: { type: Number, },
    year: { type: Number },
    count: { type: Number },
    rate: { type: Number },
    type: { type: String, require: true }
}, {
    collection:'wines',
    versionKey: false
});
module.exports = mongoose.model('Wine', Wine);