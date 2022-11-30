const db = require("../util/db");
const axios = require("axios");
const finAxios = require("../midelware/financeaxios")

module.exports = class storeRequestion {
  static showRequstion() {
    return db
      .execute("SELECT * FROM material_request")
      .then((result) => {
        return result[0];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async financeRecevable(newData) {
    await finAxios
      .post("/accountRecivable", {
        newData,
      })
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static acceptRecived(itemID) {
    return db
      .execute("SELECT * FROM material_request WHERE id = '" + itemID + "'")
      .then((result) => {
        if (result[0][0].mat_status == "ACCEPTED") {
          return "ALREADY CONFIRMED";
        } else {
          return db
            .execute("SELECT * FROM material_request WHERE id='" + itemID + "'")
            .then((result) => {
              var newMatData;
              if (result[0][0].req_materialtype == "ACCS") {
                newMatData = {
                  accs_name: result[0][0].mat_requestname,
                  accs_description: result[0][0].mat_description,
                  accs_requestdept: result[0][0].mat_requestdept,
                  accs_reqpersonid: result[0][0].mat_reqpersonid,
                  accs_quantity: result[0][0].mat_quantity,
                  materialtype: result[0][0].req_materialtype,
                  raw_prodId: result[0][0].prodID,
                  raw_salesId: result[0][0].salesID,
                };
              } else if (result[0][0].req_materialtype == "RAW") {
                newMatData = {
                  raw_name: result[0][0].mat_requestname,
                  raw_description: result[0][0].mat_description,
                  raw_requestdept: result[0][0].mat_requestdept,
                  raw_reqpersonid: result[0][0].mat_reqpersonid,
                  raw_quantity: result[0][0].mat_quantity,
                  materialtype: result[0][0].req_materialtype,
                  raw_spec: result[0][0].mat_spec,
                  raw_prodId: result[0][0].prodID,
                  raw_salesId: result[0][0].salesID,
                };
              } else if (result[0][0].req_materialtype == "FIN") {
                newMatData = {
                  fin_name: result[0][0].mat_requestname,
                  fin_description: result[0][0].mat_description,
                  fin_requestdept: result[0][0].mat_requestdept,
                  fin_reqpersonid: result[0][0].mat_reqpersonid,
                  fin_quantity: result[0][0].mat_quantity,
                  materialtype: result[0][0].req_materialtype,
                  raw_prodId: result[0][0].prodID,
                  raw_salesId: result[0][0].salesID,
                };
              }

              return newMatData;
            });
        }
      });
  }

  static makeAccept(itemID) {
    return db
      .execute(
        "UPDATE material_request SET mat_status = 'ACCEPTED' WHERE id='" +
          itemID +
          "'"
      )
      .then((result) => {
        return "accepted";
      });
  }

  static financeSubAsset(newData, dataType) {
    console.log(newData);
    finAxios
      .post("/subAsset", { data: newData, type: dataType })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return err;
      });
  }

  static addstoreRequestion(materialRequested) {
    return db
      .execute(
        "INSERT INTO material_request(mat_requestname, mat_requestdept, mat_reqpersonid, mat_description, mat_quantity, req_materialtype, mat_status, salesID, prodID, mat_unit, mat_spec) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          materialRequested.mat_requestname,
          materialRequested.mat_requestdept,
          materialRequested.mat_reqpersonid || "234",
          materialRequested.mat_description,
          materialRequested.mat_quantity,
          materialRequested.req_materialtype,
          "PENDING",
          materialRequested.SalesId || " ",
          materialRequested.ProductionId || " ",
          materialRequested.mat_unit || "",
          materialRequested.mat_spec || ""
        ]
      )
      .then((result) => {
        return true;
      })
      .catch((err) => {
        console.log("yhuyuyuuy", err);
        return false;
      });
  }
};
