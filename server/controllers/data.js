const Data = require('../models/Data');

exports.getData = async (req,res) =>{
    try {
        const datadb = await Data.find({'name':req.body.name});
        if(!datadb) throw {message:'Lost database connection!'};
        var data = []; 
        var start = new Date(req.body.start);
        var end = new Date(req.body.end);
        if(start.toString() === 'Invalid Date' || end.toString() === "Invalid Date") 
            throw {message:'Invalid Date'};
        datadb.forEach((res)=>{
            if(res.time.getTime() >= start.getTime() &&
            res.time.getTime() <= end.getTime())
                data.push({'val':res.value,'time':res.time});
        });
        res.status(200).send(data);
    } catch (err) {
        if(err.message ==='Invalid Date')
            res.status(400).send(err);
        else res.status(404).send(err);
    }
    
}