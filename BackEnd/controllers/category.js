const Category = require("../models/category");
const { errorHandler } = require("../models/help/dbErrorHander");
const category = require("../models/category");
exports.create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.json({ data });
  });
};
exports.categoryById = (req, res, next, id) => {
  category.findById(id).exec((err, category) => {
    if (err || !category) {
      return (
        res,
        status(400).json({
          error: errorHandler(error),
        })
      );
    }
    req.category = category;
    next();
  });
};
exports.read = (req, res) => {
  return res.json(req.category);
};

exports.update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json(result);
  });
};

exports.remove = (req, res) => {
  const category = req.category;
  category.remove((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json({
      message: "category deleted",
    });
  });
};
exports.list = (req, res) => {
  Category.find().exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json(result);
  });
};
