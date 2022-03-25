const Device = require('../models/Device');
const axios = require('axios');

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
    try {
        const name = req.body.name;
        console.log(name)
        await axios({
            method: 'post',
            url: `https://io.adafruit.com/api/v2/Tien9258/feeds/${name}/data`,
            headers: {
                'content-type': 'application/json',
                'X-AIO-Key':'aio_QMjW53JAD9SQwUJuS8Eg0u04LyUU'
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