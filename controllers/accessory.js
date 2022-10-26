const accsMaterial = require("../models/accessoryModel");

exports.getAccessory = (req, res, next) => {
  accsMaterial.getallAccessory().then((result) => {
    console.log(result);
    res.status(200).json(result);
  });
};

exports.addAccessory = (req, res, next) => {
  console.log(req.body);
  accsMaterial.addAccessory(req.body).then((result) => {
    console.log(result);
    res.status(200).json(result);
  });
};

exports.UpdateAccessory = (req, res, next) => {
  console.log(req.body);
  accsMaterial
    .updatebyIDAccess(req.body.id, req.body.updated)
    .then((result) => {
      res.status(200).json(result);
    });
};
