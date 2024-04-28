const urlsModel = require('../models/urlsModels.js')
const shortid = require('shortid');

const getUrls = async (req, res) => {
    try {
        const data = await urlsModel.find();
        res.status(200)
        res.json({
            output: data
        })

    }
    catch (err) {
        res.status(400).send({
            error: err
        })
    }
}

const urlGenerator = async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        if (!(body.redirectUrl)) return res.status(400).json({ error: "url is reuired" })
        const shortId = shortid(8);
        await urlsModel.create({
            shortID: shortId,
            redirectUrl: body.redirectUrl,
            visits: [],
        })
        res.status(200).json({ id: shortId })
    }
    catch (err) {
        res.status(400).send({
            error: err
        })
    }
}


module.exports = {
    getUrls,
    urlGenerator,
}