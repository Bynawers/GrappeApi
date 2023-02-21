const Wine = require("../models/wine")

exports.getWine = (req, res) => {
    Wine.findOne({ _id: req.params.id })
        .then((wine) => { res.status(200).json(wine); })
        .catch((error) => { res.status(404).json({ error: error });
    });
}

exports.getAllWines = (req, res) => {
    const pageNumber = parseInt(req.query.page) || 0
    const limit = parseInt(req.query.size) || 10
    const startIndex = pageNumber * limit;

    const name = req.query.name

    if (name !== null) { 
        Wine.find({name: new RegExp(name, 'i')}).sort("_id").skip(startIndex).limit(limit)
            .then(wines => res.status(200).json(wines))
            .catch(error => res.status(404).json({ error }));
        return;
    }
    
    Wine.find().sort("_id").skip(startIndex).limit(limit)
        .then(wines => res.status(200).json(wines))
        .catch(error => res.status(404).json({ error }));
}

exports.createWine = (req, res) => {
    if (!req.body) { res.status(400).json({ message: "empty body" }) }

    delete req.body._id;

    const wine = new Wine({
        name: req.body.name,
        country: req.body.country,
        region: req.body.region,
        winery: req.body.winery,
        volume: req.body.volume,
        year: req.body.year,
        type: req.body.type,
        verified: req.body.verified,
        natural: req.body.natural,
        grape: req.body.grape,
        rating: req.body.rating,
        temperature_service: req.body.temperature_service,
        characteristics: req.body.characteristics,
        taste: req.body.taste,
        image: `${req.protocol}://${req.get('host')}/images/${req.body.name}_${req.body.year}_${req.body.winery}.png`
      });
    
    wine.save()
        .then(() => res.status(201).json({ message: 'Wine saved successfully!' }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.updateWine = (req, res) => {
    const wineObject = req.file ? {
        ...req.body,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    
    Wine.updateOne({ _id: req.params.id}, { ...wineObject, _id: req.params.id})
        .then(() => res.status(200).json({message : 'Objet modifié!'}))
        .catch(error => res.status(401).json({ error }));
}

exports.deleteWine = (req, res) => {
    Wine.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Wine deleted successfully!'}))
        .catch(error => res.status(400).json({ error }));
}