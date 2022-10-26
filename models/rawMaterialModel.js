const db = require("../util/db");

module.exports = class rawMaterial {
  static getallMaterials() {
    return db
      .execute("SELECT * FROM raw_materials")
      .then((result) => {
        return result[0];
      })
      .catch((err) => {
        return err;
      });
  }

  static addRawMaterials(newMaterialForm) {
    const totalValue =
      parseFloat(newMaterialForm.raw_value) *
      parseFloat(newMaterialForm.raw_quantity);
    return db
      .execute(
        "INSERT INTO raw_materials(raw_name, raw_quantity, raw_description, raw_materialcode, raw_spec, raw_materialunit, raw_value, raw_referncenum, raw_date, raw_remark) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          newMaterialForm.raw_name,
          newMaterialForm.raw_quantity,
          newMaterialForm.raw_description,
          newMaterialForm.raw_materialcode,
          newMaterialForm.raw_spec,
          newMaterialForm.raw_materialunit,
          totalValue,
          newMaterialForm.raw_referncenum,
          newMaterialForm.raw_date,
          newMaterialForm.raw_remark,
        ]
      )
      .then(() => {
        return "new raw material added";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static selectbyIDRawM(ID) {
    return db
      .execute("SELECT * FROM raw_materials WHERE id='" + ID + "'")
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static checkExisRawM(newName, material_type, mat) {
    console.log(mat)
    return db
      .execute(
        "SELECT * FROM raw_materials WHERE raw_name='" +
          newName +
          "' AND raw_spec='" +
          mat.raw_spec +
          "'"
      )
      .then((result) => {
        return result[0].length !== 0 ? [true, result[0]] : [false, result[0]];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static addQty(oldMat, newMat) {
    const updateQuan =
      parseInt(oldMat[0].raw_quantity) + parseInt(newMat.raw_quantity);
    const newValue =
      parseFloat(oldMat[0].raw_value) +
      parseFloat(newMat.raw_value) * parseFloat(newMat.raw_quantity);
    return db
      .execute(
        "UPDATE raw_materials SET raw_quantity ='" +
          updateQuan +
          "', raw_value = '" +
          newValue +
          "' WHERE id ='" +
          oldMat[0].id +
          "'"
      )
      .then((result) => {
        const today = new Date();
        return db
          .execute(
            "INSERT INTO summery(material_id, material_type, summery_date, stockat_hand, stock_recieved, stock_issued, department_issued) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
              oldMat[0].id,
              "RAW",
              today,
              updateQuan,
              newMat.raw_quantity,
              "",
              "",
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
    if (oldMat[0].raw_quantity >= parseInt(newMat.raw_quantity)) {
      updateQuan =
        parseInt(oldMat[0].raw_quantity) - parseInt(newMat.raw_quantity);
      const newValue =
        parseFloat(oldMat[0].raw_value) -
        parseFloat(newMat.raw_quantity) * parseFloat(newMat.raw_value);
      return db
        .execute(
          "UPDATE raw_materials SET raw_quantity ='" +
            updateQuan +
            "' AND raw_value ='" +
            newValue +
            "' WHERE raw_name ='" +
            oldMat[0].raw_name +
            "'"
        )
        .then((result) => {
          const today = new Date();
          return db
            .execute(
              "INSERT INTO summery(material_id, material_type, summery_date, stockat_hand, stock_recieved, stock_issued, department_issued, stockat_end) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
              [
                oldMat[0].id,
                "RAW",
                today,
                oldMat[0].raw_quantity,
                "",
                newMat.raw_quantity,
                newMat.raw_requestdept,
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
    } else {
      return "Low in stock";
    }
  }

  static updatebyIDRawM(ID, updatedData) {
    return db
      .execute(
        "UPDATE raw_materials SET raw_name ='" +
          updatedData.raw_name +
          "', raw_quantity = '" +
          updatedData.raw_quantity +
          "', raw_description = '" +
          updatedData.raw_description +
          "', raw_materialcode = '" +
          updatedData.raw_materialcode +
          "', raw_spec ='" +
          updatedData.raw_spec +
          "', raw_materialunit = '" +
          updatedData.raw_materialunit +
          "', raw_value = '" +
          updatedData.raw_value +
          "', raw_referncenum = '" +
          updatedData.raw_referncenum +
          "', raw_date = '" +
          updatedData.raw_date +
          "', raw_remark = '" +
          updatedData.raw_remark +
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
};

// module.exports = rawMaterial;
