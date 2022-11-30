const db = require("../util/db");

module.exports = class accessory {
  static getallFinished() {
    return db
      .execute("SELECT * FROM finished_goods")
      .then((result) => {
        return result[0];
      })
      .catch((err) => {
        return console.log(err);
      });
  }

  static addFinishedMat(newMaterialForm) {
    const totalValue =
      parseFloat(newMaterialForm.finished_value) *
      parseFloat(newMaterialForm.finished_quantity);
    return db
      .execute(
        "INSERT INTO finished_goods(finished_name, finished_quantity, finished_description, finished_materialcode, finished_spec, finished_materialunit, finished_value, finished_referncenum, finished_date, finished_remark, finished_catag, finished_diameter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          newMaterialForm.finished_name,
          newMaterialForm.finished_quantity,
          newMaterialForm.finished_description,
          newMaterialForm.finished_materialcode,
          newMaterialForm.finished_spec,
          newMaterialForm.finished_materialunit,
          totalValue,
          newMaterialForm.finished_referncenum,
          newMaterialForm.finished_date,
          newMaterialForm.finished_remark,
          newMaterialForm.finished_catago,
          newMaterialForm.finished_diameter,
        ]
      )
      .then(() => {
        return "new finished good added";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static selectbyIDFinished(ID) {
    return db
      .execute("SELECT * FROM finished_goods WHERE id='" + ID + "'")
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static updatebyIDFinished(ID, updatedData) {
    return db
      .execute(
        "UPDATE finished_materials SET finished_name ='" +
          updatedData.finished_name +
          "', finished_quantity = '" +
          updatedData.finished_quantity +
          "', finished_description = '" +
          updatedData.finished_description +
          "', finished_materialcode = '" +
          updatedData.finished_materialcode +
          "', finished_spec ='" +
          updatedData.finished_spec +
          "', finished_materialunit = '" +
          updatedData.finished_materialunit +
          "', finished_value = '" +
          updatedData.finished_value +
          "', finished_referncenum = '" +
          updatedData.finished_referncenum +
          "', finished_date = '" +
          updatedData.finished_date +
          "', finished_remark = '" +
          updatedData.finished_remark +
          "' WHERE id = " +
          ID +
          ""
      )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static addQty(oldMat, newMat) {
    const updateQuan =
      parseInt(oldMat[0].finished_quantity) + parseInt(newMat.fin_quantity);
    const newValue =
      parseFloat(oldMat[0].finished_value) +
      parseFloat(newMat.fin_value) * parseFloat(newMat.fin_quantity);

    return db
      .execute(
        "UPDATE finished_goods SET finished_quantity ='" +
          updateQuan +
          "', finished_spec = '" +
          newValue +
          "' WHERE id ='" +
          oldMat[0].id +
          "'"
      )
      .then((result) => {
        const today = new Date();
        return db
          .execute(
            "INSERT INTO summery(material_id, material_type, summery_date, stockat_hand, stock_recieved, stock_issued, department_issued, stockat_end) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [
              oldMat[0].id,
              "FIN",
              today,
              oldMat[0].finished_quantity,
              newMat.fin_quantity,
              "",
              "",
              updateQuan,
            ]
          )
          .then((res) => {
            return "summery Updated";
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  static subQty(oldMat, newMat) {
    var updateQuan;
    if (oldMat[0].finished_quantity >= parseInt(newMat.fin_quantity)) {
      updateQuan =
        parseInt(oldMat[0].finished_quantity) - parseInt(newMat.fin_quantity);
      
      return db
        .execute(
          "UPDATE finished_goods SET	finished_quantity ='" +
            updateQuan +

            "' WHERE id ='" +
            oldMat[0].id +
            "'"
        )
        .then((result) => {
          const today = new Date();
          return db
            .execute(
              "INSERT INTO summery(material_id, material_type, summery_date, stockat_hand, stock_recieved, stock_issued, department_issued, stockat_end) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
              [
                oldMat[0].id,
                "FIN",
                today,
                oldMat[0].finished_quantity,
                "",
                newMat.fin_quantity,
                newMat.fin_requestdept,
                updateQuan,
              ]
            )
            .then((res) => {
              return "summery_Updated";
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      return "Low in stock";
    }
  }

  static checkExisFinM(newName, material_type, mat) {
    return db
      .execute(
        "SELECT * FROM finished_goods WHERE finished_name='" +
          newName +
          "' AND finished_description='" +
          mat.fin_description +
          "'"
      )
      .then((result) => {
        return result[0].length !== 0 ? [true, result[0]] : [false, result[0]];
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
