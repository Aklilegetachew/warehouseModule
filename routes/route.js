const express = require("express");
const rawModule = require("../controllers/rewmaterial");
const finishedMat = require("../controllers/finishedMaterial");
const accessory = require("../controllers/accessory");
const homepage = require("../controllers/home");
const received = require("../controllers/receivedMaterials");
const purchaseing = require("../controllers/purchaseRequest");
const requstion = require("../controllers/storeRequestion");
const summery = require("../controllers/summery");
const searchController = require("../controllers/searchCont");

const router = express.Router();

router.get("/", homepage.slash);
router.get("/rawmaterials", rawModule.getMaterials);
router.post("/addnewrawmaterials", rawModule.addMaterials);
router.post("/updatenewrawmaterials", rawModule.UpdateMaterials);

router.get("/accessory", accessory.getAccessory);
router.post("/addnewAccessory", accessory.addAccessory);
router.post("/updateAccessory", accessory.UpdateAccessory);

router.get("/finishedMaterial", finishedMat.getFinished);
router.post("/addnewFinMaterials", finishedMat.addFinished);
router.post("/updateFinishedMaterials", finishedMat.UpdateFinished);

router.post("/addnewPurchased", received.newPurchased);
router.post("/confirmPurchased", received.acceptPurchased);
router.get("/shownewPurchased", received.shownewPurchased);

router.post("/requestPurchase", purchaseing.addPurchaseReq);
router.get("/showPurchaseRequested", purchaseing.showPurchaseRequest);

router.get("/showStoreRequestion", requstion.showStoreReq);
router.post("/StoreRequestion", requstion.addrequestion);
router.post("/responseStoreRequestion", requstion.responseStoreReq);

router.post("/showSummeryByID", summery.showById);
router.post("/showSummeryByMonth", summery.showByIdMonth);
router.post("/showSummeryByYear", summery.showByIdYear);
router.post("/showAllByType", summery.showByType);


///// for searching purpuse endpoints
router.post("/searchName", searchController.searchName);
router.post("/searchSpec", searchController.searchSpec);

module.exports = router;
