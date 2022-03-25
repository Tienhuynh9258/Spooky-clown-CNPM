const Device = require('../models/Device');
const axios = require('axios');

exports.getDevice = async (req,res) =>{
    try { 
        console.log(req.body.name)
        const device = await Device.find({'name':req.body.name});
        res.status(200).send(device);
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
    
}

exports.getDeviceStatus = async (req,res) =>{
    try { 
        console.log(req.body.name)
        const device = await Device.find({'name':req.body.name});
        res.status(200).send(device[0].status);
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
    
}

exports.getDeviceLevel = async (req,res) =>{
    try { 
        console.log(req.body.name)
        const device = await Device.find({'name':req.body.name});
        res.status(200).send(device[0].level.toString());
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