const Device = require('../models/Device');
const axios = require('axios');
const jsons = require('../config/default');

exports.getDevice = async (req,res) =>{
    try { 
        console.log(req.body.name)
        const device = await Device.find();
        res.status(200).send(device);
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
    
}


exports.setDeviceLevel = async (req,res) =>{
  const { name, level } = req.body;
  try {
    let device = await Device.findOne({ name });

    if (!device) {
        return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
    const update={
        $set:{"level":Number(level)}
      }
      const result=await Device.updateOne({name:name},update);
      res.json({ level });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
}

exports.setDeviceStatus = async (req,res) =>{
    // console.log(req.body)
    try {
        const name = req.body.name;
        console.log(name)
        await axios({
            method: 'post',
            url: `https://io.adafruit.com/api/v2/Tien9258/feeds/${name}/data`,
            headers: {
                'content-type': 'application/json',
                'X-AIO-Key':jsons.AIO_KEY
            }, 
            data: { 
                value: req.body.value
              }
            }).then((data)=>{
                res.status(200).send(data.data.value);
            });
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
}