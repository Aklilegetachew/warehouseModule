const rawMaterial = require("../models/rawMaterialModel");

exports.getMaterials = (req, res, next) => {
  rawMaterial.getallMaterials().then((result) => {
    
    res.status(200).json(result);
  });
};

exports.addMaterials = (req, res, next) => {
  console.log(req.body);
  rawMaterial.addRawMaterials(req.body).then((result) =>{
    console.log(result)
    res.status(200).json(result);
  });
};

exports.UpdateMaterials = (req, res, next) => {
  console.log(req.body);
  rawMaterial.updatebyIDRawM(req.body.id, req.body.updated).then((result) =>{
    res.status(200).json(result);
  });
};