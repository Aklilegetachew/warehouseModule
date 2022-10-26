const db = require("../util/db");

module.exports = class searchingEngine {
  static searchNameFin(keyWords) {
    return db.execute(
      "SELECT finished_name, finished_materialcode FROM finished_goods WHERE finished_name LIKE'" + keyWords + "'"
    ).then((result)=>{
        return result[0];
    }).catch((err)=>{
        console.log(err);
    })
  }

  static searchSpecFin(keyWords) {
    return db.execute(
      "SELECT finished_spec FROM finished_goods WHERE finished_spec LIKE'" + keyWords + "'"
    ).then((result)=>{
        return result[0];
    }).catch((err)=>{
        console.log(err);
    })
  }

  static searchNameRaw(keyWords) {
    return db.execute(
      "SELECT raw_name, raw_materialcode FROM raw_materials WHERE raw_name LIKE'" + keyWords + "'"
    ).then((result)=>{
        return result[0];
    }).catch((err)=>{
        console.log(err);
    })
  }

  static searchSpecRaw(keyWords) {
    return db.execute(
      "SELECT raw_spec FROM raw_materials WHERE raw_spec LIKE'" + keyWords + "'"
    ).then((result)=>{
        return result[0];
    }).catch((err)=>{
        console.log(err);
    })
  }

  static searchNameAccs(keyWords) {
    return db.execute(
      "SELECT accs_name, accs_materialcode FROM accs_materials WHERE accs_name LIKE'" + keyWords + "'"
    ).then((result)=>{
        return result[0];
    }).catch((err)=>{
        console.log(err);
    })
  }

  static searchSpecAccs(keyWords) {
    return db.execute(
      "SELECT accs_spec FROM accs_materials WHERE accs_spec LIKE'" + keyWords + "'"
    ).then((result)=>{
        return result[0];
    }).catch((err)=>{
        console.log(err);
    })
  }
};


