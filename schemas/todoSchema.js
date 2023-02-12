const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// instance methods
todoSchema.methods = {
  findActive: function () {
    return mongoose.model("Db").find({ title: "react" });
  },
  findActiveCallback: function (cb) {
    return mongoose.model("Db").find({ title: "JS 100" }, cb);
  },
};

// static methods
todoSchema.statics = {
  findByJS: function () {
    return mongoose.model("Db").find({ title: /js/i });
  },
};

// query helpers
todoSchema.query = {
  byLanguage: function (language) {
    return this.find({ title: new RegExp(language, "i") }); // new RegExp()
  },
};

module.exports = todoSchema;