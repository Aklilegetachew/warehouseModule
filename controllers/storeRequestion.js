const storeRequestion = require("../models/storeRequstionModel");
const accsMat = require("../models/accessoryModel");
const rawMat = require("../models/rawMaterialModel");
const finMat = require("../models/finishedModule");
const receivedModule = require("../models/recievedMatModules");

exports.showStoreReq = (req, res, next) => {
  console.log(req.body);
  storeRequestion.showRequstion().then((result) => {
    console.log(result);
    res.status(200).json(result);
  });
};

exports.responseStoreReq = (req, res, next) => {
  const singBody = req.body;
  var purchaseMaterials = [];
  var declinedMats = [];

  // bodyRec.forEach((singBody) => {
  if (req.body.status == "Accept") {
    storeRequestion.acceptRecived(singBody.id).then((result) => {
      if (typeof result === "string") {
        return result;
      } else {
        if (result.materialtype == "ACCS") {
          accsMat
            .checkExisAccsM(result.accs_name, result.material_type, result)
            .then((found) => {
              console.log(found);
              if (found[0]) {
                console.log("found");
                const response = accsMat.subAccsQty(found[1], result);
                storeRequestion.makeAccept(singBody.id);
                res.status(200).json({
                  message: "items Updated",
                });
              } else {
                console.log("Not Found" + result);
                purchaseMaterials.push(result);
                res.status(200).json({
                  message: "no material in store please purchase these items",
                  materials: purchaseMaterials,
                });
              }
            });
        } else if (result.materialtype == "RAW") {
          rawMat
            .checkExisRawM(result.raw_name, result.material_type, result)
            .then((found) => {
              console.log(found[1]);
              if (found[0]) {
                const response = rawMat.subQty(found[1], result);
                storeRequestion.makeAccept(singBody.id);
                res.status(200).json({
                  message: "items Updated",
                });
              } else {
                purchaseMaterials.push(result);
                res.status(200).json({
                  message: "no material in store please purchase these items",
                  materials: purchaseMaterials,
                });
              }
            });
        } else if (result.materialtype == "FIN") {
          finMat
            .checkExisFinM(result.fin_name, result.material_type, result)
            .then((found) => {
              console.log(found);
              if (found[0]) {
                const response = finMat.subQty(found[1], result);
              } else {
                console.log("Not Found" + result);
                purchaseMaterials.push(result);
              }
            });
        }
      }
    });
  } else {
    receivedModule.declineRecived(singBody.id).then((result) => {
      res.status(200).json({
        message: "Item requestion declined",
        declinedMat: declinedMats,
      });
    });
  }
};

exports.addrequestion = (req, res, next) => {
  var resultArray = [];
  const reqestedMaterials = req.body.material;
  console.log(reqestedMaterials);

  storeRequestion.addstoreRequestion(reqestedMaterials).then((result) => {
    if (result == false) {
      resultArray.push(result);
    }
  });

  if (resultArray.length == 0) {
    res.status(200).json("STORE REQUEST ADDED");
  } else {
    res.status(400).json("STORE REQUEST ERROR");
  }
};
