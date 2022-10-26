const finishedGood = require("../models/finishedModule");

exports.getFinished = (req, res, next) => {
    finishedGood.getallFinished().then((result) => {
    console.log(result);
    res.status(200).json(result);
  });
};

exports.addFinished = (req, res, next) => {
  console.log(req.body);
  finishedGood.addFinishedMat(req.body).then((result) =>{
    console.log(result)
    res.status(200).json(result);
  });
};

exports.UpdateFinished = (req, res, next) => {
  console.log(req.body);
  finishedGood.updatebyIDFinished(req.body.id, req.body.updated).then((result) =>{
  
    res.status(200).json(result);
  });
};