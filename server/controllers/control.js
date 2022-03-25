const Control = require('../models/Control');
const axios = require('axios');

/* exports.getControl = async (req,res) =>{
    try {

        const control = await Control.find({'name':req.body.name});
        res.status(200).send(control);
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
} */
exports.setControl = async (req,res) =>{
    try {
        const name = req.body.name;
        console.log(name)
        await axios({
            method: 'post',
            url: `https://io.adafruit.com/api/v2/Tien9258/feeds/${name}/data`,
            headers: {
                'content-type': 'application/json',
                'X-AIO-Key':'aio_sEMr10Iggj80Vwy3w2a76lvTBwOI'
            }, 
            data: { 
                value: req.body.value
              }
            });
            res.status(200).send(name);
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
    
}
