const Handle = require('../models/Handle');
const axios = require('axios');

exports.getHandle = async (req,res) =>{
    try { 
        const nameHandle = 'handle'
        const handledb = await Handle.find({'name':nameHandle});
        if(!handledb) throw {message:'Lost database connection!'};
        res.status(200).send(handledb);
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
    
}

exports.setHandle = async (req,res) =>{
    try {   
        await axios({
            method: 'post',
            url: `https://io.adafruit.com/api/v2/Tien9258/feeds/bbc-handle-button/data`,
            headers: {
                'content-type': 'application/json',
                'X-AIO-Key':'aio_PVjW684hBoqCI5J7nxWu0jMxlPVo'
            }, 
            data: { 
                value: req.body.status
              }
            });
            res.status(200).send('handle');
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
    
}