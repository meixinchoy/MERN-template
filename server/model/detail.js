const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let detail = new Schema({
    name: {
        type: String
    },
    age: {
        type: String
    }
});

exports.detailModel = mongoose.model("detail", detail);