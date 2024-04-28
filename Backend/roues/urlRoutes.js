const express = require('express');
const urlsControllers = require('../controllers/urlsControllers');
const urlsModel = require('../models/urlsModels.js')

const router = express.Router();

router.post('/',urlsControllers.urlGenerator)
.get('/',urlsControllers.getUrls)
.get('/:shortID',async(req,res)=>{
    const shortID = req.params.shortID;
    const entry =  await urlsModel.findOneAndUpdate({shortID},{
        $push:{
            visits:{
                timestamp: Date.now()
            } 
        }
    })
    console.log(entry)
    res.redirect(entry.redirectUrl)
})


module.exports = router