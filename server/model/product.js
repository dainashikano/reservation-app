const mongoose  = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    id: Number,
    name: { type: String, required: true, max:[60, '最大60文字までです']},
    price: Number,
    stock: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,
    coverImage: String
});

module.exports = mongoose.model('Product', ProductSchema)


