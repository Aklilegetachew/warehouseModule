const summeryClass = require("../models/summeryModel");

exports.showById = (req, res, next) => {
  console.log(req.body);
  summeryClass
    .viewSummery(req.body.id, req.body.materialType)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    });
};

exports.showByIdMonth = async (req, res, next) => {
  console.log(req.body);
  const result = await summeryClass.viewSummeryMonth(
    req.body.id,
    req.body.materialType,
    req.body.selectedDate,
    req.body.selectedYear
  );
  console.log(result);
  res.status(200).json(result);
};

exports.showByIdYear = async (req, res, next) => {
  console.log(req.body);
  const result = await summeryClass.viewSummeryYear(
    req.body.id,
    req.body.materialType,
    req.body.selectedYear
  );

  res.status(200).json(result);
};

exports.showByType = async (req, res, next) => {
  console.log(req.body);
  const result = await summeryClass.viewType(req.body.materialType);

  res.status(200).json(result);
};
