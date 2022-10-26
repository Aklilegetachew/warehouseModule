const receivedModule = require("../models/recievedMatModules");
const rawMat = require("../models/rawMaterialModel");
const accsMat = require("../models/accessoryModel");
const finMat = require("../models/finishedModule");

exports.newPurchased = (req, res, next) => {
  const reqBody = req.body;
  reqBody.forEach((singleBody) => {
    receivedModule
      .addonRecived(singleBody)
      .then((result) => {
        return;
      })
      .catch((err) => {
        res.status(200).json("Database error");
      });
  });

  res.status(200).json("Item Added to be Purchased");
};

exports.shownewPurchased = (req, res, next) => {
  receivedModule.viewnewPurchased().then((result) => {
    res.status(200).json(result);
  });
};

exports.acceptPurchased = (req, res, next) => {
  const singleData = req.body;
  // bodyData.forEach((singleData)=>{
  if (singleData.status == "Accept") {
    receivedModule.acceptRecived(singleData.id).then((result) => {
      // call if available
      if (typeof result === "string") {
        res.status(200).json(result);
      } else {
        if (result.material_type == "ACCS") {
          console.log("found here");
          accsMat
            .checkExisAccsM(result.accs_name, result.material_type, result)
            .then((found) => {
              if (found[0]) {
                accsMat.addAccsQty(found[1], result);
              } else {
                accsMat.addAccessory(result);
              }
            });
        } else if (result.material_type == "RAW") {
          rawMat
            .checkExisRawM(result.raw_name, result.material_type, result)
            .then((found) => {
              if (found[0]) {
                rawMat.addQty(found[1], result);
              } else {
                rawMat.addRawMaterials(result);
              }
            });
        } else if (result.material_type == "FIN") {
          finMat
            .checkExisFinM(result.fin_name, result.material_type, result)
            .then((found) => {
              if (found[0]) {
                finMat.addQty(found[1], result);
              } else {
                finMat.addFinishedMat(result);
              }
            });
        }
      }

      // result.aw_name;
    });
  } else {
    receivedModule.declineRecived(singleData.id).then((result) => {});
  }

  // }
  // )

  res.status(200).json({ message: "item updated" });
};
