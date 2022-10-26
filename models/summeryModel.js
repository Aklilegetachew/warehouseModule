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

  static viewSummeryMonth(id, materialType, selectedMonth) {
    if (selectedMonth == "") {
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

          if (result[0].length !== 0) {
            result[0].map((eachData) => {
              const dbMonth = new Date(eachData["summery_date"]).getMonth();
              if (currentMonth == dbMonth) {
                console.log(eachData);
                monthlyData.push(eachData);
              }
            });
          }
          return monthlyData;
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
          var monthlyData = [];

          if (result[0].length !== 0) {
            result[0].map((eachData) => {
              const dbMonth = new Date(eachData["summery_date"]).getMonth();
              if (selectedMonth == dbMonth) {
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
    return db
      .execute("SELECT * FROM summery WHERE material_type='" + sumtype + "'")
      .then((respo) => {
        return respo[0];
      })
      .catch((e) => {
        return e;
      });
  }
};
