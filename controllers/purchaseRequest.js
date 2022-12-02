const purchaseRequest = require("../models/purchaseRequestModel");

exports.addPurchaseReq = (req, res, next) => {
  console.log(req.body);
  const resData = req.body;
  // resData.forEach((singlebody) => {
  purchaseRequest.makeRequest(req.body).then((result) => {
    if (result[0]) {
      res.status(200).json(result[1]);
    } else {
      res.status(400).json(result[1]);
    }
  });
  // });
};

exports.showPurchaseRequest = (req, res, next) => {
  console.log(req.body);
  purchaseRequest.showPurchaseRequests().then((result) => {
    res.status(200).json(result);
  });
};
