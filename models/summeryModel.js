const db = require("../util/db");

module.exports = class storeRequestion {
  static viewSummery(id, materialType) {
    return db
      .execute(
        "SELECT * FROM summery WHERE material_id='" +
          id +
          "' AND material_type = '" +
          materialType +
          "'"
      )
      .then((result) => {
        return result[0];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static viewSummeryMonth(id, materialType, selectedDate, selectedYear) {
    console.log("year", selectedYear);
    if (selectedDate.start == undefined && selectedYear == "") {
      console.log("Hello");
      const currentMonth = new Date().getMonth();

      return db
        .execute(
          "SELECT * FROM summery WHERE material_id='" +
            id +
            "' AND material_type = '" +
            materialType +
            "'"
        )
        .then((result) => {
          var monthlyData = [];
          console.log(result[0]);

          // if (result[0].length !== 0) {
          //   result[0].map((eachData) => {
          //     const dbMonth = new Date(eachData["summery_date"]).getMonth();
          //     if (currentMonth == dbMonth) {
          //       monthlyData.push(eachData);
          //     }
          //   });
          // }
          // console.log(monthlyData);
          return result[0];
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (selectedDate.start !== undefined && selectedYear == "") {
      return db
        .execute(
          "SELECT * FROM summery WHERE material_id='" +
            id +
            "' AND material_type = '" +
            materialType +
            "'"
        )
        .then((result) => {
          var monthlyData = [];

          const start = Date.parse(selectedDate.start);
          const end = Date.parse(selectedDate.end);
          console.log("start", start);
          console.log("end", end);
          // true
          if (result[0].length !== 0) {
            result[0].map((eachData) => {
              // const dbDate = new Date(eachData["summery_date"]).getTime();
              const d = Date.parse(eachData["summery_date"]);
              console.log("D", d);
              if (d >= start && d <= end) {
                console.log("eachData", eachData);
                monthlyData.push(eachData);
              }
            });
          }
          return monthlyData;
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (selectedDate.start !== undefined && selectedYear !== "") {
      return db
        .execute(
          "SELECT * FROM summery WHERE material_id='" +
            id +
            "' AND material_type = '" +
            materialType +
            "'"
        )
        .then((result) => {
          var monthlyData = [];

          const start = Date.parse(selectedDate.start);
          const end = Date.parse(selectedDate.end);

          console.log("start", start);
          console.log("end", end);
          // true
          if (result[0].length !== 0) {
            result[0].map((eachData) => {
              // const dbDate = new Date(eachData["summery_date"]).getTime();
              const d = Date.parse(eachData["summery_date"]);
              // const dbYear = Date(eachData["summery_date"]).getFullYear();
              console.log(eachData["summery_date"].getYear());
              console.log("D", d);
              if (d >= start && d <= end && dbYear == selectedYear) {
                console.log("eachData", eachData);
                monthlyData.push(eachData);
              }
            });
          }
          return monthlyData;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  static viewSummeryYear(id, materialType, selectedYear) {
    if (selectedYear == "") {
      const currentYear = new Date().getFullYear();
      console.log(currentYear);
      return db
        .execute(
          "SELECT * FROM summery WHERE material_id='" +
            id +
            "' AND material_type = '" +
            materialType +
            "'"
        )
        .then((result) => {
          var yearData = [];
          if (result[0].length !== 0) {
            result[0].map((eachData) => {
              const dbYear = new Date(eachData["summery_date"]).getFullYear();
              if (currentYear == dbYear) {
                yearData.push(eachData);
              }
            });
          }
          return yearData;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return db
        .execute(
          "SELECT * FROM summery WHERE material_id='" +
            id +
            "' AND material_type = '" +
            materialType +
            "'"
        )
        .then((result) => {
          var yearData = [];

          if (result[0].length !== 0) {
            result[0].map((eachData) => {
              const dbYear = new Date(eachData["summery_date"]).getFullYear();
              if (selectedYear == dbYear) {
                yearData.push(eachData);
              }
            });
          }
          return yearData;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  static viewType(sumType) {
    if (sumType == "RAW") {
      return db
        .execute(
          "SELECT summery.*, raw_materials.raw_name, raw_materials.raw_spec, raw_materials.raw_description FROM summery, raw_materials WHERE summery.material_id = raw_materials.id AND summery.material_type = 'RAW'"
        )
        .then((respo) => {
          return respo[0];
        })
        .catch((e) => {
          return e;
        });
    } else if (sumType == "ACCS") {
      return db
        .execute(
          "SELECT summery.*, accs_materials.accs_name, accs_materials.accs_spec, accs_materials.accs_description FROM summery, accs_materials WHERE summery.material_id = accs_materials.id AND summery.material_type = 'ACCS'"
        )
        .then((respo) => {
          return respo[0];
        })
        .catch((e) => {
          return e;
        });
    } else {
      return db
        .execute(
          "SELECT summery.*, finished_goods.finished_name, finished_goods.finished_spec, finished_goods.finished_description FROM summery, finished_goods WHERE summery.material_id = finished_goods.id AND summery.material_type = 'FIN'"
        )
        .then((respo) => {
          return respo[0];
        })
        .catch((e) => {
          return e;
        });
    }
  }
};
