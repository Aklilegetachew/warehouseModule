const searchMod = require("../models/searchMod");

exports.searchName = (req, res, next)=>{

    const searchMatType = req.body.type;

    if(searchMatType == "Fin"){
        searchMod.searchNameFin(req.body.keyword).then((respo)=>{
            res.status(200).json(respo)
        })

    }else if(searchMatType == "Raw"){
        searchMod.searchNameRaw(req.body.keyword).then((respo)=>{
            res.status(200).json(respo)
        })  
    }else if(searchMatType == "Accs"){
        searchMod.searchNameAccs(req.body.keyword).then((respo)=>{
            res.status(200).json(respo)
        })  
    }else{
        res.status(200).json(respo)

    }


}

exports.searchSpec = (req, res, next)=>{

    const searchMatType = req.body.type;

    if(searchMatType == "Fin"){
        searchMod.searchNameFin(req.body.keyword).then((respo)=>{
            res.status(200).json(respo)
        })

    }else if(searchMatType == "Raw"){
        searchMod.searchNameRaw(req.body.keyword).then((respo)=>{
            res.status(200).json(respo)
        })  
    }else if(searchMatType == "Accs"){
        searchMod.searchNameAccs(req.body.keyword).then((respo)=>{
            res.status(200).json(respo)
        })  
    }else{
        res.status(200).json(respo)

    }


}