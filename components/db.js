const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fesa")

const User = mongoose.model('User',
  {
    email: String,
    uname: String,
    password: String
  }
);

const Collection = mongoose.model('Collection',
  {
    uname: String,
    proName: String,
    info: String,
    date: String,
    id: Number
  }
);

module.exports = {
  User, Collection  
};
