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
    } 
    else if (selectedDate.start !== undefined && selectedYear !== "") {
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
              console.log(eachData["summery_date"].getYear())
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
    return db
      .execute("SELECT * FROM summery WHERE material_type='" + sumType + "'")
      .then((respo) => {
        return respo[0];
      })
      .catch((e) => {
        return e;
      });
  }
};
