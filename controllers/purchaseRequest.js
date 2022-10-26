const purchaseRequest = require("../models/purchaseRequestModel");

exports.addPurchaseReq = (req, res, next) => {
  console.log(req.body);
  const resData = req.body;
  resData.forEach((singlebody) => {
    purchaseRequest.makeRequest(singlebody).then((result) => {
      console.log(result);
    });
  });
  res.status(200).json("Request Sent");
};

exports.showPurchaseRequest = (req, res, next) => {
  console.log(req.body);
  purchaseRequest.showPurchaseRequests().then((result) => {
    res.status(200).json(result);
  });
};
