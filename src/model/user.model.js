'use strict';
import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
autoIncrement.initialize(mongoose.connection);

var userSch = new Schema({
    userNo: Number,
    username: String,
    password: String
});

userSch.index({
  userNo:1,
  username: 'text'
});

userSch.plugin(autoIncrement.plugin, {
  model: 'User',
  field: 'userNo',
  startAt: 1000,
  incrementBy: 1
});

module.exports = mongoose.model('User', userSch);
