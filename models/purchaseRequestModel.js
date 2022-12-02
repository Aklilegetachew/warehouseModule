const db = require("../util/db");

module.exports = class purchaseModule {
  static makeRequest(requestedMaterial) {
    return db
      .execute(
        "INSERT INTO purcase_requestform(request_material, request_person, request_materialid, request_qty, request_date, request_department, pur_status) VALUES (?,?,?,?,?,?,?)",
        [
          requestedMaterial.material_name,
          requestedMaterial.material_requesti,
          requestedMaterial.materialId,
          requestedMaterial.materialQty,
          requestedMaterial.date,
          requestedMaterial.department_requesti,
          requestedMaterial.reqStatus,
        ]
      )
      .then((res) => {
        return [true, "Request Sent"];
      })
      .catch((err) => {
        return [false, err];
      });
  }

  static acceptRequest(Id) {
    db.execute(
      "UPDATE purcase_requestform SET pur_status = Accepted WHERE id = " +
        Id +
        ""
    )
      .then(() => {
        return "Request Accepted";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static showPurchaseRequests() {
    return db
      .execute("SELECT * FROM purcase_requestform")
      .then((result) => {
        return result[0];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static declineRequest(Id) {
    db.execute(
      "UPDATE purcase_requestform SET pur_status = DECLINED WHERE id = " +
        Id +
        ""
    )
      .then(() => {
        return "Request Declined";
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
