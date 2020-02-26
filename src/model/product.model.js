'use strict';
import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import mongoosePaginate from 'mongoose-paginate-v2';

autoIncrement.initialize(mongoose.connection);

var prdSch = new Schema({
    prdNo: Number,
    name: String,
    desc: String,
    price: Number,
    qty: Number,
    image: String
});

prdSch.index({
  prdNo:1,
  name: 'text',
  qty: 1
});

prdSch.plugin(autoIncrement.plugin, {
  model: 'Product',
  field: 'prdNo',
  startAt: 1000,
  incrementBy: 1
});

prdSch.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', prdSch);
